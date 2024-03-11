import { formatName } from './src/helpers/formatters/formatName';
import { createCardFrame } from './src/helpers/figma/cardCardFrame';
import { getRadixPalettes } from './src/helpers/radix/getRadixPalettes';
import { generateStyles } from './src/helpers/figma/generateStyles';
import { MessageProps } from './src/types/types';
import { getColorTranslated } from './src/helpers/colors/getColorTranslated';

const palettes = getRadixPalettes();

const getCurrentColor = (colorType, colorName, themeColor, index) => {
  const newColorName = colorType === "alpha" ? colorName + 'A' : colorName;

  const currentColor = palettes[colorType][colorName][themeColor][`${newColorName}${index + 1}`];

  return currentColor;
}

figma.showUI(__html__, {
  width: 340,
  height: 292,
  title: "Radix Palette Generator",
});

figma.ui.onmessage = (message: MessageProps) => {
  if (message.type === "action-generate") {
    const { colorType, themeColor } = message.formDataObject;
    let { colorName } = message.formDataObject
    const levelsAmount = 12;

    // CREATE PARENT FRAME
    const parentFrameName = `${formatName(colorName)} ${formatName(themeColor)} ${formatName(colorType)}`;

    const parentFrameBackgroundColor = getColorTranslated('SOLID', '#ffffff00');

    const parentFrame = figma.createFrame();
    parentFrame.name = parentFrameName;

    parentFrame.layoutMode = "HORIZONTAL";
    parentFrame.paddingTop = 24;
    parentFrame.paddingRight = 24;
    parentFrame.paddingBottom = 24;
    parentFrame.paddingLeft = 24;
    parentFrame.itemSpacing = 24;
    parentFrame.primaryAxisSizingMode = "AUTO";
    parentFrame.counterAxisSizingMode = "AUTO";
    parentFrame.fills = parentFrameBackgroundColor;

    for (let index = 0; index < levelsAmount; index++) {
      const currentColor = getCurrentColor(colorType, colorName, themeColor, index);

      // CREATE CARD FRAME
      const cardName = `${formatName(colorName)} ${formatName(themeColor)} ${formatName(colorType)} - ${index + 1}`;

      const cardFrame = createCardFrame(cardName, currentColor);

      parentFrame.appendChild(cardFrame);

      // SELECT PARENT FRAME
      const selectFrame: FrameNode[] = [];
      selectFrame.push(parentFrame);
      figma.currentPage.selection = selectFrame;
      figma.viewport.scrollAndZoomIntoView(selectFrame);

      const tintNodeName = `${formatName(colorName)}/${formatName(themeColor)}/${index + 1}`;

      const colorStyle = figma.createPaintStyle();
      const stylePaints: SolidPaint[] | Paint[] = generateStyles(
        "SOLID",
        currentColor,
        colorType,
        colorName,
      );
      colorStyle.name = tintNodeName;
      colorStyle.paints = stylePaints;
    }

    figma.closePlugin("Palette generated successfully! 👋🏽");
  } else if (message.type === "action-exit") {
    figma.closePlugin("Bye! 👋🏽");
  }
};
