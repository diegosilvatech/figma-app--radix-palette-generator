import { createCardFrame } from '../../frames/createCardFrame';
import { createTintFrame } from '../../frames/createTintFrame';

const createColorFrame = (cardName, colorHex, colorName) => {
  const cardFrame = createCardFrame(cardName);
  const tintFrame = createTintFrame(colorHex, colorName);

  // APPEND CHILDS
  cardFrame.appendChild(tintFrame);

  return cardFrame;
};

export { createColorFrame };
