import { generateFillColor } from "../colors/generateFillColor";
import { formatName } from "../formatters/formatName";

const createParentFrame = (colorName, colorTheme, colorType) => {
  const parentFrameName = `${formatName(colorName)} ${formatName(colorTheme)} ${formatName(colorType)}`;

  const fillColor = generateFillColor('SOLID', '#ffffff', false);

  const parentFrame = figma.createFrame();
  parentFrame.name = parentFrameName;

  parentFrame.layoutMode = "HORIZONTAL";
  parentFrame.paddingTop = 24;
  parentFrame.paddingRight = 24;
  parentFrame.paddingBottom = 24;
  parentFrame.paddingLeft = 24;
  parentFrame.itemSpacing = 24;
  parentFrame.primaryAxisSizingMode = "AUTO";
  parentFrame.counterAxisSizingMode = "AUTO";
  parentFrame.fills = fillColor;

  return parentFrame;
}

export { createParentFrame };
