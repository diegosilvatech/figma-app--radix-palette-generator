import { createText } from "../../fonts/createText";
import { loadFont } from "../../fonts/loadFont";
import { createContrastDataFrame } from "../../frames/createContrastDataFrame";
import { getCurrentColor } from "../colors/getCurrentColor";
import { formatName } from "../formatters/formatName";
import { createColorFrame } from "./createColorFrame";
import { createParentFrame } from "./createParentFrame";
import { generateStyles } from "./generateStyles";

const actionGenerate = (formDataObject) => {

  const { colorType, colorTheme, colorName } = formDataObject;
  const paletteColorsAmount = 12;
  const parentFrame = createParentFrame(colorName, colorTheme, colorType);

  // for (let index = 0; index < paletteColorsAmount; index++) {
  for (let index = 0; index < paletteColorsAmount; index++) {
    const currentColor = getCurrentColor(colorType, colorName, colorTheme, index);

    // CREATE CARD FRAME
    const cardName = `${formatName(colorName)} ${formatName(colorTheme)} ${formatName(colorType)} - ${index + 1}`;
    // const cardFrame = createColorFrame(cardName, currentColor, colorName);
    // parentFrame.appendChild(cardFrame);

    // SELECT PARENT FRAME
    const selectFrame: FrameNode[] = [];
    selectFrame.push(parentFrame);
    figma.currentPage.selection = selectFrame;
    figma.viewport.scrollAndZoomIntoView(selectFrame);

    const tintNodeName = `${formatName(colorName)}/${formatName(colorTheme)}/${index + 1}`;

    const colorStyle = figma.createPaintStyle();
    const stylePaints: SolidPaint[] | Paint[] = generateStyles(
      "SOLID",
      currentColor,
      colorType,
      colorName,
    );
    colorStyle.name = tintNodeName;
    colorStyle.paints = stylePaints;

    // LOAD FONTS
  }
  figma.closePlugin("Palette generated successfully! 👋🏽");
}

export { actionGenerate };