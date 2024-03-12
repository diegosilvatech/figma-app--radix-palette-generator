import { getRadixPalettes } from "../radix/getRadixPalettes";

const getColorHex = (colorType, colorName, colorTheme, index) => {
  const palettes = getRadixPalettes();

  const newColorName = colorType === "alpha" ? colorName + 'A' : colorName;

  const colorHex = palettes[colorType][colorName][colorTheme][`${newColorName}${index + 1}`];

  return colorHex;
}

export { getColorHex };