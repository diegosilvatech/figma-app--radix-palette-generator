import { generateFillColor } from "../helpers/colors/generateFillColor";

const createContrastDataFrame = (currentColor) => {
  const fillColor = generateFillColor('SOLID', currentColor);
  const contrastDataFrame = figma.createFrame();
  contrastDataFrame.name = 'Contrast Data Frame';
  contrastDataFrame.layoutMode = 'HORIZONTAL';
  contrastDataFrame.primaryAxisSizingMode = 'FIXED';
  contrastDataFrame.primaryAxisAlignItems = 'SPACE_BETWEEN';
  contrastDataFrame.counterAxisAlignItems = 'CENTER';
  contrastDataFrame.counterAxisSizingMode = 'FIXED';
  // contrastDataFrame.paddingLeft = 4;
  // contrastDataFrame.itemSpacing = 4;
  contrastDataFrame.resize(108, 20);

  contrastDataFrame.fills = fillColor;

  return contrastDataFrame;
};

export { createContrastDataFrame };