import { createCardFrame } from '../../frames/createCardFrame';

const createColorFrame = (cardName, currentColor) => {
  const colorFrame = createCardFrame(cardName, currentColor);

  return colorFrame;
};

export { createColorFrame };
