import { createCardFrame } from '../../frames/createCardFrame';
import { createTintFrame } from '../../frames/createTintFrame';

const createColorFrame = (cardName, currentColor, colorName) => {
  const cardFrame = createCardFrame(cardName);
  const tintFrame = createTintFrame(currentColor, colorName);

  // APPEND CHILDS
  cardFrame.appendChild(tintFrame);

  return cardFrame;
};

export { createColorFrame };
