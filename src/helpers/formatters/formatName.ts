const formatName = (colorName) => {
  if (!colorName) return colorName;
  return colorName.charAt(0).toUpperCase() + colorName.slice(1);
}

export { formatName }