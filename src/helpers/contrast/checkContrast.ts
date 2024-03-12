import { hex, score } from 'wcag-contrast';

const getColorClassification = (classification: string) => {
  if (classification === 'AAA') {
    return '#000000'; // black
  } else if (classification === 'AA') {
    return '#4d841e'; // green
  } else if (classification === 'AA Large') {
    return '#84771e'; // yellow
  } else {
    return '#a20002'; // red
  }
};

const checkContrast = (colorHex) => {
  const contrastScore = hex(colorHex, '#000000');
  const colorWithBetterContrast = contrastScore < 7.1 ? '#ffffff' : '#000000';
  const newContrastScore = hex(colorHex, colorWithBetterContrast);

  const contrastClassification = score(newContrastScore);

  const colorContrastClassification = {
    score: contrastScore.toFixed(2),
    classification: contrastClassification,
    color: getColorClassification(contrastClassification)
  };
  return colorContrastClassification;
};

const getColorWithBetterContrast = (colorHex, colorType) => {

  const colorSolidDark = '#ffffff';
  const colorSolidLight = '#000000';

  const colorAlphaDark = '#000000';
  const colorAlphaLight = '#ffffff';

  let contrastScore;

  let colorWithBetterContrast = '';

  if (colorType === 'solid') {
    contrastScore = hex(colorHex, colorSolidLight);
    colorWithBetterContrast = contrastScore < 7.1 ? colorSolidDark : colorSolidLight;
  } else {
    contrastScore = hex(colorHex, colorAlphaDark);
    colorWithBetterContrast = contrastScore < 7.1 ? colorAlphaDark : colorAlphaLight;
  }

  return colorWithBetterContrast;
};

export { checkContrast, getColorWithBetterContrast };
