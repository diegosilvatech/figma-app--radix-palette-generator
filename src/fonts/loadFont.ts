const loadFont = async () => {
  await figma.loadFontAsync({ family: 'Inter', style: 'Light' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
};

export { loadFont };
