import { generateFillColor } from "../helpers/colors/generateFillColor";

const createTintFrame = (colorHex) => {
  const fillColor = generateFillColor('SOLID', colorHex);

  const tintFrame = figma.createFrame();
  tintFrame.name = 'Tint';

  const tintFrameWidth = 120;
  const tintFrameHeight = 120;
  tintFrame.layoutMode = 'VERTICAL';
  tintFrame.resize(tintFrameWidth, tintFrameHeight);
  tintFrame.primaryAxisAlignItems = 'MAX';
  tintFrame.counterAxisAlignItems = 'MIN';
  tintFrame.paddingTop = 6;
  tintFrame.paddingRight = 6;
  tintFrame.paddingBottom = 6;
  tintFrame.paddingLeft = 6;
  tintFrame.fills = fillColor;

  return tintFrame;
};

export { createTintFrame };
