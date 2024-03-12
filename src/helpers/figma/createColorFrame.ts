import { createCardFrame } from '../../frames/createCardFrame';

const createColorFrame = (cardName, colorTheme) => {
  const cardFrame = createCardFrame(cardName, colorTheme);

  return cardFrame;
};

export { createColorFrame };
