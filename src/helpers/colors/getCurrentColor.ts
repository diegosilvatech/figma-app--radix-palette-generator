import { getRadixPalettes } from "../radix/getRadixPalettes";

const getCurrentColor = (colorType, colorName, colorTheme, index) => {
  const palettes = getRadixPalettes();

  const newColorName = colorType === "alpha" ? colorName + 'A' : colorName;

  const currentColor = palettes[colorType][colorName][colorTheme][`${newColorName}${index + 1}`];

  return currentColor;
}

export { getCurrentColor };