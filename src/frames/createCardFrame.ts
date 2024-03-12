import { getColorTranslated } from '../helpers/colors/getColorTranslated';
import { formatName } from '../helpers/formatters/formatName';

const createCardFrame = (cardName) => {
  const colorFill = getColorTranslated('SOLID', '#ffffff');

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
  cardFrame.fills = colorFill;

  return cardFrame;
};

export { createCardFrame };
