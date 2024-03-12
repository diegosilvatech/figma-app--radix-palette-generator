import { generateFillColor } from "../helpers/colors/generateFillColor";

const createColorInfoFrame = (colorHex) => {
  const fillColor = generateFillColor('SOLID', '#ff00ff');
  const contrastDataFrame = figma.createFrame();
  contrastDataFrame.name = 'Contrast Info';
  contrastDataFrame.layoutMode = 'HORIZONTAL';
  contrastDataFrame.primaryAxisSizingMode = 'FIXED';
  contrastDataFrame.primaryAxisAlignItems = 'SPACE_BETWEEN';
  contrastDataFrame.counterAxisAlignItems = 'CENTER';
  contrastDataFrame.counterAxisSizingMode = 'FIXED';
  contrastDataFrame.resize(108, 20);

  contrastDataFrame.fills = fillColor;

  return contrastDataFrame;
};

export { createColorInfoFrame };