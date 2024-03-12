import { createText } from "../../fonts/createText";
import { loadFont } from "../../fonts/loadFont";
import { createContrastDataFrame } from "../../frames/createContrastDataFrame";
import { createTintFrame } from "../../frames/createTintFrame";
import { getColorHex } from "../colors/getColorHex";
import { formatName } from "../formatters/formatName";
import { createColorFrame } from "./createColorFrame";
import { createParentFrame } from "./createParentFrame";
import { generateStyles } from "./generateStyles";

const actionGenerate = (formDataObject) => {

  const { colorType, colorTheme, colorName } = formDataObject;
  const paletteColorsAmount = 12;
  const parentFrame = createParentFrame(colorName, colorTheme, colorType);

  for (let index = 0; index < paletteColorsAmount; index++) {

    // FRAME DATA
    const colorHex = getColorHex(colorType, colorName, colorTheme, index);
    const colorLevel = index + 1;

    // CREATE CARD FRAME
    const cardName = `${formatName(colorName)} ${formatName(colorTheme)} ${formatName(colorType)} - ${colorLevel}`;

    // SELECT PARENT FRAME
    const selectFrame: FrameNode[] = [];
    selectFrame.push(parentFrame);
    figma.currentPage.selection = selectFrame;
    figma.viewport.scrollAndZoomIntoView(selectFrame);

    const tintNodeName = `${formatName(colorName)}/${formatName(colorTheme)}/${colorLevel}`;

    const colorStyle = figma.createPaintStyle();
    const stylePaints: SolidPaint[] | Paint[] = generateStyles(
      "SOLID",
      colorHex,
      colorType,
      colorName,
    );
    colorStyle.name = tintNodeName;
    colorStyle.paints = stylePaints;

    // APPEND FRAMES
    const colorFrame = createColorFrame(cardName);
    parentFrame.appendChild(colorFrame);
    const tintFrame = createTintFrame(colorHex);
    colorFrame.appendChild(tintFrame);

  }
  figma.closePlugin("Palette generated successfully! 👋🏽");
}

export { actionGenerate };