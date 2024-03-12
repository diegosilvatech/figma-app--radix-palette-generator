import { createText } from "../../fonts/createText";
import { getApplicationTextContext } from "../../fonts/getApplicationTextContext";
import { loadFont } from "../../fonts/loadFont";
import { createColorInfoFrame } from "../../frames/createColorInfoFrame";
import { createTintFrame } from "../../frames/createTintFrame";
import { getColorHex } from "../colors/getColorHex";
import { formatName } from "../formatters/formatName";
import { createColorFrame } from "./createColorFrame";
import { createParentFrame } from "./createParentFrame";
import { generateStyles } from "./generateStyles";

const actionGenerate = async (formDataObject) => {

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

    // TEXT DATA
    const applicationText = getApplicationTextContext(colorLevel);

    // APPEND FRAMES
    const colorFrame = createColorFrame(cardName);
    parentFrame.appendChild(colorFrame);
    const tintFrame = createTintFrame(colorHex);
    colorFrame.appendChild(tintFrame);
    const colorInfoFrame = createColorInfoFrame(colorHex);
    tintFrame.appendChild(colorInfoFrame);


    // LOAD FONTS
    await loadFont().then(() => {
      const colorApplicationText = createText({
        family: 'Inter',
        style: 'Medium',
        size: 6,
        case: 'TITLE',
        characters: applicationText,
        color: '#000000',
        opacity: 0.6
      });

      const colorNameText = createText({
        family: 'Inter',
        style: 'Bold',
        size: 12,
        case: 'TITLE',
        characters: `${colorName} ${colorLevel}`,
        color: '#000000'
      });

      const colorHexText = createText({
        family: 'Inter',
        style: 'Medium',
        size: 8,
        case: 'UPPER',
        characters: colorHex,
        color: '#000000',
        opacity: 0.6
      });

      // APPEND TEXTS
      colorInfoFrame.appendChild(colorApplicationText);
      colorInfoFrame.appendChild(colorNameText);
      colorInfoFrame.appendChild(colorHexText);
    });
  }


  figma.closePlugin("Palette generated successfully! 👋🏽");
}

export { actionGenerate };