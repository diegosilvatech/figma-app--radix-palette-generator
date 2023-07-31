import {
  tomato,
  tomatoA,
  tomatoDark,
  tomatoDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  crimson,
  crimsonA,
  crimsonDark,
  crimsonDarkA,
  pink,
  pinkA,
  pinkDark,
  pinkDarkA,
  plum,
  plumA,
  plumDark,
  plumDarkA,
  purple,
  purpleA,
  purpleDark,
  purpleDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  indigo,
  indigoA,
  indigoDark,
  indigoDarkA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  cyan,
  cyanA,
  cyanDark,
  cyanDarkA,
  teal,
  tealA,
  tealDark,
  tealDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  grass,
  grassA,
  grassDark,
  grassDarkA,
  brown,
  brownA,
  brownDark,
  brownDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
  sky,
  skyA,
  skyDark,
  skyDarkA,
  mint,
  mintA,
  mintDark,
  mintDarkA,
  lime,
  limeA,
  limeDark,
  limeDarkA,
  yellow,
  yellowA,
  yellowDark,
  yellowDarkA,
  amber,
  amberA,
  amberDark,
  amberDarkA,
  gold,
  goldA,
  goldDark,
  goldDarkA,
  bronze,
  bronzeA,
  bronzeDark,
  bronzeDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  sage,
  sageA,
  sageDark,
  sageDarkA,
  olive,
  oliveA,
  oliveDark,
  oliveDarkA,
  sand,
  sandA,
  sandDark,
  sandDarkA,
} from "@radix-ui/colors";

import { ColorTranslator } from "colortranslator";

const palettes = {
  solid: {
    tomato: { light: tomato, dark: tomatoDark },
    red: { light: red, dark: redDark },
    crimson: { light: crimson, dark: crimsonDark },
    pink: { light: pink, dark: pinkDark },
    plum: { light: plum, dark: plumDark },
    purple: { light: purple, dark: purpleDark },
    violet: { light: violet, dark: violetDark },
    indigo: { light: indigo, dark: indigoDark },
    blue: { light: blue, dark: blueDark },
    cyan: { light: cyan, dark: cyanDark },
    teal: { light: teal, dark: tealDark },
    green: { light: green, dark: greenDark },
    grass: { light: grass, dark: grassDark },
    brown: { light: brown, dark: brownDark },
    orange: { light: orange, dark: orangeDark },
    sky: { light: sky, dark: skyDark },
    mint: { light: mint, dark: mintDark },
    lime: { light: lime, dark: limeDark },
    yellow: { light: yellow, dark: yellowDark },
    amber: { light: amber, dark: amberDark },
    gold: { light: gold, dark: goldDark },
    bronze: { light: bronze, dark: bronzeDark },
    gray: { light: gray, dark: grayDark },
    mauve: { light: mauve, dark: mauveDark },
    slate: { light: slate, dark: slateDark },
    sage: { light: sage, dark: sageDark },
    olive: { light: olive, dark: oliveDark },
    sand: { light: sand, dark: sandDark },
  },
  alpha: {
    tomato: { light: tomatoA, dark: tomatoDarkA },
    red: { light: redA, dark: redDarkA },
    crimson: { light: crimsonA, dark: crimsonDarkA },
    pink: { light: pinkA, dark: pinkDarkA },
    plum: { light: plumA, dark: plumDarkA },
    purple: { light: purpleA, dark: purpleDarkA },
    violet: { light: violetA, dark: violetDarkA },
    indigo: { light: indigoA, dark: indigoDarkA },
    blue: { light: blueA, dark: blueDarkA },
    cyan: { light: cyanA, dark: cyanDarkA },
    teal: { light: tealA, dark: tealDarkA },
    green: { light: greenA, dark: greenDarkA },
    grass: { light: grassA, dark: grassDarkA },
    brown: { light: brownA, dark: brownDarkA },
    orange: { light: orangeA, dark: orangeDarkA },
    sky: { light: skyA, dark: skyDarkA },
    mint: { light: mintA, dark: mintDarkA },
    lime: { light: limeA, dark: limeDarkA },
    yellow: { light: yellowA, dark: yellowDarkA },
    amber: { light: amberA, dark: amberDarkA },
    gold: { light: goldA, dark: goldDarkA },
    bronze: { light: bronzeA, dark: bronzeDarkA },
    gray: { light: grayA, dark: grayDarkA },
    mauve: { light: mauveA, dark: mauveDarkA },
    slate: { light: slateA, dark: slateDarkA },
    sage: { light: sageA, dark: sageDarkA },
    olive: { light: oliveA, dark: oliveDarkA },
    sand: { light: sandA, dark: sandDarkA },
  },
};

const generateFills = (
  type,
  palettes,
  colorType: "solid" | "alpha",
  colorName,
  themeColor: "light" | "dark",
  index
): Paint[] => {
  debugger;
  const isDark = themeColor === "dark";
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
  width: 320,
  height: 260,
  title: "Radix Palette Generator",
});

figma.ui.onmessage = (message: MessageProps) => {
  if (message.type === "action-generate") {
    const { colorName, colorType, themeColor } = message.formDataObject;

    debugger;

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

    figma.closePlugin("Tints generated successfully!");
  } else if (message.type === "action-exit") {
    figma.closePlugin("exit!");
  }
};
