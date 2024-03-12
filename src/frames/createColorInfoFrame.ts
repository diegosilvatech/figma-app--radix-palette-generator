import { generateFillColor } from "../helpers/colors/generateFillColor";

const createColorInfoFrame = (colorHex) => {
  const fillColor = generateFillColor('SOLID', '#ffffff', false);
  const colorInfoFrame = figma.createFrame();
  colorInfoFrame.name = 'Color Info';
  colorInfoFrame.layoutMode = 'VERTICAL';
  colorInfoFrame.primaryAxisSizingMode = 'AUTO';
  colorInfoFrame.counterAxisSizingMode = 'FIXED';
  colorInfoFrame.primaryAxisAlignItems = 'CENTER';
  colorInfoFrame.counterAxisAlignItems = 'MIN';
  colorInfoFrame.layoutAlign = 'STRETCH';

  colorInfoFrame.fills = fillColor;

  return colorInfoFrame;
};

export { createColorInfoFrame };