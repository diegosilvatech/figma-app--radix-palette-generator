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
    const colorHex = getColorHex(colorType, colorName, colorTheme, index);

    // CREATE CARD FRAME
    const cardName = `${formatName(colorName)} ${formatName(colorTheme)} ${formatName(colorType)} - ${index + 1}`;

    // SELECT PARENT FRAME
    const selectFrame: FrameNode[] = [];
    selectFrame.push(parentFrame);
    figma.currentPage.selection = selectFrame;
    figma.viewport.scrollAndZoomIntoView(selectFrame);

    const tintNodeName = `${formatName(colorName)}/${formatName(colorTheme)}/${index + 1}`;

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
    const cardFrame = createColorFrame(cardName, colorHex, colorName);
    parentFrame.appendChild(cardFrame);
    // const tintFrame = createTintFrame()
  }
  figma.closePlugin("Palette generated successfully! 👋🏽");
}

export { actionGenerate };