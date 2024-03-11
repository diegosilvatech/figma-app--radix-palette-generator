type RgbProps = {
  r: number;
  g: number;
  b: number;
};

const convertRgbaToHex = (rgb: RgbProps, opacity: string) => {
  const rgba = {
    r: (rgb.r * 255).toString(16),
    g: (rgb.g * 255).toString(16),
    b: (rgb.b * 255).toString(16),
    a: Math.round((Number(opacity.replace('%', '')) / 100) * 255).toString(16)
  };

  if (rgba.r.length === 1) rgba.r = '0' + rgba.r;
  if (rgba.g.length === 1) rgba.g = '0' + rgba.g;
  if (rgba.b.length === 1) rgba.b = '0' + rgba.b;
  if (rgba.a.length === 1) rgba.a = '0' + rgba.a;

  const { r, g, b, a } = rgba;

  const hex = `${r}${g}${b}${a}`;

  return hex;
};

export { convertRgbaToHex };
