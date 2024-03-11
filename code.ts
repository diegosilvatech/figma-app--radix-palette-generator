import { formatName } from './src/helpers/formatters/formatName';
import { createCardFrame } from './src/helpers/figma/cardFrame';
import { getRadixPalettes } from './src/helpers/radix/getRadixPalettes';
import { generateStyles } from './src/helpers/figma/generateStyles';
import { MessageProps } from './src/types/types';

const palettes = getRadixPalettes();

figma.showUI(__html__, {
  width: 340,
  height: 292,
  title: "Radix Palette Generator",
});

figma.ui.onmessage = (message: MessageProps) => {
  if (message.type === "action-generate") {
    const { colorName, colorType, themeColor } = message.formDataObject;
    const levelsAmount = 12;

    // CREATE LOCAL STYLES
    for (let index = 0; index < levelsAmount; index++) {
      const tintNodeName = `${formatName(colorName)}/${formatName(themeColor)}${colorType === "alpha" ? " Alpha" : ""
        }/${index + 1}`;

      const colorStyle = figma.createPaintStyle();
      const stylePaints: SolidPaint[] | Paint[] = generateStyles(
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
    figma.closePlugin("Bye! 👋🏽");
  }
};
