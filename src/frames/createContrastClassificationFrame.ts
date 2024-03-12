import { generateFillColor } from "../helpers/colors/generateFillColor";

const createContrastClassificationFrame = (colorHex) => {
  const fillColor = generateFillColor('SOLID', '#00000010');

  const classificationFrame = figma.createFrame();
  classificationFrame.name = 'Contrast Classification';
  classificationFrame.layoutMode = 'VERTICAL';
  classificationFrame.counterAxisSizingMode = 'AUTO';
  classificationFrame.primaryAxisSizingMode = 'AUTO';
  classificationFrame.counterAxisAlignItems = 'CENTER';
  classificationFrame.paddingLeft = 6;
  classificationFrame.paddingTop = 4;
  classificationFrame.paddingRight = 6;
  classificationFrame.paddingBottom = 4;
  classificationFrame.fills = fillColor;

  return classificationFrame;
};

export { createContrastClassificationFrame };