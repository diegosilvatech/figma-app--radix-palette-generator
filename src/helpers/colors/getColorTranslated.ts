import { ColorTranslator } from "colortranslator";

const getColorTranslated = (type, color) => {
  const { r, g, b, a } = new ColorTranslator(color).RGBAObject;
  return [
    {
      type,
      color: {
        r: r / 255,
        g: g / 255,
        b: b / 255
      },
      opacity: a
    }
  ]
}

export { getColorTranslated };
