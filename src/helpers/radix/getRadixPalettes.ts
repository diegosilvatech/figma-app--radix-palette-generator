import * as colors from '@radix-ui/colors';

const getRadixPalettes = () => {
  const cleanColors = Object.keys(colors).filter(colorName => !colorName.includes('A') && !colorName.includes('Dark') && !colorName.includes('P3'));

  const palettes = { solid: {}, alpha: {} };
  cleanColors.forEach(colorName => {
    palettes.solid[colorName] = { light: colors[colorName], dark: colors[colorName + 'Dark'] };
    palettes.alpha[colorName] = { light: colors[colorName + 'A'], dark: colors[colorName + 'DarkA'] };
  })

  return palettes;
}



export { getRadixPalettes }