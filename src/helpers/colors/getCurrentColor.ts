import { getRadixPalettes } from "../radix/getRadixPalettes";

const getCurrentColor = (colorType, colorName, themeColor, index) => {
  const palettes = getRadixPalettes();

  const newColorName = colorType === "alpha" ? colorName + 'A' : colorName;

  const currentColor = palettes[colorType][colorName][themeColor][`${newColorName}${index + 1}`];

  return currentColor;
}

export { getCurrentColor };