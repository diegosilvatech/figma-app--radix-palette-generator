const getApplicationTextContext = (colorLevel) => {
  let applicationText = '';
  if (colorLevel < 3) {
    applicationText = 'Backgrounds';
  } else if (colorLevel < 6) {
    applicationText = 'Interactive Components';
  } else if (colorLevel < 9) {
    applicationText = 'Borders & Separators';
  } else if (colorLevel < 11) {
    applicationText = 'Solid Colors';
  } else {
    applicationText = 'Accessible Text';
  }

  return applicationText;
};

export { getApplicationTextContext };
