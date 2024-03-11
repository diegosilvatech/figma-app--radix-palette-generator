import { convertHexToRgb } from '../colors/convertHexToRgb';

const createCardFrame = () => {
  const cardFrame = figma.createFrame();
  cardFrame.name = 'cardFrame';
  cardFrame.layoutMode = 'VERTICAL';
  cardFrame.paddingTop = 8;
  cardFrame.paddingRight = 8;
  cardFrame.paddingBottom = 8;
  cardFrame.paddingLeft = 8;
  cardFrame.itemSpacing = 8;
  cardFrame.primaryAxisSizingMode = 'AUTO';
  cardFrame.counterAxisSizingMode = 'AUTO';
  cardFrame.fills = [{ type: 'SOLID', color: convertHexToRgb('ffffff') }];

  return cardFrame;
};

export { createCardFrame };
