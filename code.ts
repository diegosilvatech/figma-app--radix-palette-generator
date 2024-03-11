import * as colors from '@radix-ui/colors';
import { ColorTranslator } from "colortranslator";

const cleanColors = Object.keys(colors).filter(colorName => !colorName.includes('A') && !colorName.includes('Dark') && !colorName.includes('P3'));

const palettes = { solid: {}, alpha: {} };
cleanColors.forEach(colorName => {
  palettes.solid[colorName] = {light: colors[colorName], dark: colors[colorName + 'Dark']};
  palettes.alpha[colorName] = {light: colors[colorName+ 'A'], dark: colors[colorName + 'DarkA']};
})

const generateFills = (
  type,
  palettes,
  colorType: "solid" | "alpha",
  colorName,
  themeColor: "light" | "dark",
  index
): Paint[] => {
  const isAlpha = colorType === "alpha";
  const paletteKey = palettes[colorType];
  let radixColorName = colorName;

  if (isAlpha) {
    radixColorName += "A";
  }

  const rgbaColorObject = new ColorTranslator(
    paletteKey[colorName][themeColor][`${radixColorName}${index + 1}`]
  );

  const { r, g, b, a } = rgbaColorObject.RGBAObject;

  return [
    {
      type,
      color: {
        r: r / 255,
        g: g / 255,
        b: b / 255,
      },
      opacity: a,
    },
  ];
};

type FormDataProps = {
  colorName: string;
  colorType: "solid" | "alpha";
  themeColor: "light" | "dark";
};

type MessageProps = {
  type: string;
  formDataObject: FormDataProps;
};

figma.showUI(__html__, {
  width: 340,
  height: 292,
  title: "Radix Palette Generator",
});

figma.ui.onmessage = (message: MessageProps) => {
  if (message.type === "action-generate") {
    const { colorName, colorType, themeColor } = message.formDataObject;

    // generated elements properties
    const tintNumber = 12;
    const circleSize = 80;
    const circleSpacing = 16;

    const parentFrame = figma.createFrame();
    parentFrame.name = `${colorName}-${themeColor}${
      colorType === "alpha" ? "Alpha" : ""
    }`;
    parentFrame.layoutMode = "HORIZONTAL";
    parentFrame.paddingTop = 16;
    parentFrame.paddingRight = 16;
    parentFrame.paddingBottom = 16;
    parentFrame.paddingLeft = 16;
    parentFrame.itemSpacing = circleSpacing;
    parentFrame.primaryAxisSizingMode = "AUTO";
    parentFrame.counterAxisSizingMode = "AUTO";
    parentFrame.fills = generateFills(
      "SOLID",
      palettes,
      "solid",
      "mauve",
      themeColor,
      0
    );

    for (let index = 0; index < tintNumber; index++) {
      // generated element shape
      const tintNode = figma.createEllipse();

      // generated element property
      const tintNodeName = `${colorName}/${themeColor}${
        colorType === "alpha" ? "Alpha" : ""
      }/${index + 1}`;
      tintNode.name = tintNodeName;
      tintNode.resize(circleSize, circleSize);
      tintNode.fills = generateFills(
        "SOLID",
        palettes,
        colorType,
        colorName,
        themeColor,
        index
      );
      parentFrame.appendChild(tintNode);

      const selectFrame: FrameNode[] = [];
      selectFrame.push(parentFrame);
      figma.currentPage.selection = selectFrame;
      figma.viewport.scrollAndZoomIntoView(selectFrame);

      // generated element style
      const colorStyle = figma.createPaintStyle();
      const stylePaints: SolidPaint[] | Paint[] = generateFills(
        "SOLID",
        palettes,
        colorType,
        colorName,
        themeColor,
        index
      );

      colorStyle.name = tintNodeName;
      colorStyle.paints = stylePaints;
    }

    figma.closePlugin("Palette generated successfully! 👋🏽");
  } else if (message.type === "action-exit") {
    figma.closePlugin("exit!");
  }
};
