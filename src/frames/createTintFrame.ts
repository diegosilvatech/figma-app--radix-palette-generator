import { createText } from "../fonts/createText";
import { generateFillColor } from "../helpers/colors/generateFillColor";
import { createContrastDataFrame } from "./createContrastDataFrame";
import { createContrastInfoFrame } from "./createContrastInfoFrame";

const createTintFrame = (currentColor, colorName) => {
  const colorFill = generateFillColor('SOLID', currentColor);

  const tintFrame = figma.createFrame();
  tintFrame.name = 'Tint Frame';

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
  tintFrame.fills = colorFill;

  return tintFrame;
};

export { createTintFrame };
