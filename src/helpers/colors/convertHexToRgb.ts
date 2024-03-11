import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';

const convertHexToRgb = (hexColor: string) => {
  const defaultRgbColor = {
    r: 1,
    g: 0,
    b: 1
  };
  return convertHexColorToRgbColor(hexColor) || defaultRgbColor;
};

export { convertHexToRgb };
