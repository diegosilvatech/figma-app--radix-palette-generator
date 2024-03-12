import { hex, score, rgb } from 'wcag-contrast';

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

const checkContrast = (primaryColor: string, secondaryColor: string) => {
  const contrastScore = hex(primaryColor, secondaryColor);
  const contrastClassification = score(contrastScore);

  const colorContrast = {
    score: contrastScore.toFixed(2),
    classification: contrastClassification,
    color: getColorClassification(contrastClassification)
  };
  return colorContrast;
};

const getColorWithBetterContrast = (colorHex) => {
  const contrastScore = hex(colorHex, '#000000');
  const colorWithBetterContrast = contrastScore < 7.1 ? '#ffffff' : '#000000';

  return colorWithBetterContrast;
};

export { checkContrast, getColorWithBetterContrast };
