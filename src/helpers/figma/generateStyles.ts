import { ColorTranslator } from "colortranslator";

const generateStyles = (
  type,
  colorHex,
  colorType: "solid" | "alpha",
  colorName,
): Paint[] => {
  const isAlpha = colorType === "alpha";

  let radixColorName = colorName;

  if (isAlpha) {
    radixColorName += "A";
  }

  const rgbaColorObject = new ColorTranslator(colorHex);

  const { r, g, b, a } = rgbaColorObject.RGBAObject;

  return [
    {
      type,
      color: {
        r: r / 255,
        g: g / 255,
        b: b / 255,
      },
      opacity: a,
    },
  ];
};

export { generateStyles }