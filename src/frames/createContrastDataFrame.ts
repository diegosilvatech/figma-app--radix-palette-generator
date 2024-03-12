import { getColorTranslated } from "../helpers/colors/getColorTranslated";

const createContrastDataFrame = (currentColor) => {
  const colorFill = getColorTranslated('SOLID', currentColor);
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

  contrastDataFrame.fills = colorFill;

  return contrastDataFrame;
};

export { createContrastDataFrame };