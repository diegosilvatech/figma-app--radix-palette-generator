import { generateFillColor } from '../helpers/colors/generateFillColor';
import { formatName } from '../helpers/formatters/formatName';

const createCardFrame = (cardName, colorTheme) => {
  const colorThemeBackground = colorTheme === 'light' ? '#ffffff' : '#111111';
  const fillColor = generateFillColor('SOLID', colorThemeBackground);

  const cardFrame = figma.createFrame();
  cardFrame.name = formatName(cardName);
  cardFrame.layoutMode = 'VERTICAL';
  cardFrame.paddingTop = 8;
  cardFrame.paddingRight = 8;
  cardFrame.paddingBottom = 8;
  cardFrame.paddingLeft = 8;
  cardFrame.itemSpacing = 8;
  cardFrame.primaryAxisSizingMode = 'AUTO';
  cardFrame.counterAxisSizingMode = 'AUTO';
  cardFrame.fills = fillColor;

  return cardFrame;
};

export { createCardFrame };
