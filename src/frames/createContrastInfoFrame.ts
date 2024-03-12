import { generateFillColor } from "../helpers/colors/generateFillColor";

const createContrastInfoFrame = (colorHex) => {
  const fillColor = generateFillColor('SOLID', '#ffffff', false);
  const colorInfoFrame = figma.createFrame();
  colorInfoFrame.name = 'Constrast Info';
  colorInfoFrame.layoutMode = 'VERTICAL';
  colorInfoFrame.primaryAxisSizingMode = 'AUTO';
  colorInfoFrame.counterAxisSizingMode = 'FIXED';
  colorInfoFrame.primaryAxisAlignItems = 'SPACE_BETWEEN';
  colorInfoFrame.counterAxisAlignItems = 'MAX';
  colorInfoFrame.layoutAlign = 'STRETCH';

  colorInfoFrame.fills = fillColor;

  return colorInfoFrame;
};

export { createContrastInfoFrame };