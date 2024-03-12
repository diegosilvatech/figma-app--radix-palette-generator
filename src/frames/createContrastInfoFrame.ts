import { generateFillColor } from "../helpers/colors/generateFillColor";

const createContrastInfoFrame = (
  // textColor,
  currentColor
) => {
  const fillColor = generateFillColor('SOLID', currentColor);

  const contrastInfoFrame = figma.createFrame();
  contrastInfoFrame.name = 'Contrast Info Frame';
  contrastInfoFrame.layoutMode = 'HORIZONTAL';
  contrastInfoFrame.resize(108, 20);
  contrastInfoFrame.fills = fillColor;
  contrastInfoFrame.counterAxisAlignItems = 'CENTER';

  return contrastInfoFrame;
};

export { createContrastInfoFrame };
