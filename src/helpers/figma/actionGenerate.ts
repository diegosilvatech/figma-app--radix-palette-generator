import { createText } from "../../fonts/createText";
import { getApplicationTextContext } from "../../fonts/getApplicationTextContext";
import { loadFont } from "../../fonts/loadFont";
import { createContrastClassificationFrame } from "../../frames/createContrastClassificationFrame";
import { createColorInfoFrame } from "../../frames/createColorInfoFrame";
import { createContrastInfoFrame } from "../../frames/createContrastInfoFrame";
import { createTintFrame } from "../../frames/createTintFrame";
import { getColorHex } from "../colors/getColorHex";
import { checkContrast, getColorWithBetterContrast } from "../contrast/checkContrast";
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
    const colorText = getColorWithBetterContrast(colorHex, colorType);
    const scoreText = checkContrast(colorHex).classification;


    // APPEND FRAMES
    const colorFrame = createColorFrame(cardName, colorTheme);
    parentFrame.appendChild(colorFrame);
    const tintFrame = createTintFrame(colorHex);
    colorFrame.appendChild(tintFrame);
    const contrastInfoFrame = createContrastInfoFrame(colorHex);
    tintFrame.appendChild(contrastInfoFrame);
    const colorInfoFrame = createColorInfoFrame(colorHex);
    tintFrame.appendChild(colorInfoFrame);
    const contrastClassificationFrame = createContrastClassificationFrame(colorHex);
    contrastInfoFrame.appendChild(contrastClassificationFrame);

    // LOAD FONTS
    await loadFont().then(() => {
      const colorApplicationText = createText({
        family: 'Inter',
        style: 'Medium',
        size: 6,
        case: 'TITLE',
        characters: applicationText,
        color: colorText,
        opacity: 0.6
      });

      const colorNameText = createText({
        family: 'Inter',
        style: 'Bold',
        size: 12,
        case: 'TITLE',
        characters: `${colorName} ${colorLevel}`,
        color: colorText
      });

      const colorHexText = createText({
        family: 'Inter',
        style: 'Medium',
        size: 8,
        case: 'UPPER',
        characters: colorHex,
        color: colorText,
        opacity: 0.6
      });

      const classificationScoreText = createText({
        family: 'Inter',
        style: 'Medium',
        size: 4,
        case: 'UPPER',
        characters: scoreText,
        color: colorText
      });

      // APPEND TEXTS
      colorInfoFrame.appendChild(colorApplicationText);
      colorInfoFrame.appendChild(colorNameText);
      colorInfoFrame.appendChild(colorHexText);
      
      // contrastInfoFrame.appendChild(classificationScoreText);
      contrastClassificationFrame.appendChild(classificationScoreText);
    });
  }


  figma.closePlugin("Palette generated successfully! 👋🏽");
}

export { actionGenerate };