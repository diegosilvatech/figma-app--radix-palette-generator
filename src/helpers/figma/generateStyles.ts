import { ColorTranslator } from "colortranslator";

const generateStyles = (
  type,
  palettes,
  colorType: "solid" | "alpha",
  colorName,
  themeColor: "light" | "dark",
  index
): Paint[] => {
  const isAlpha = colorType === "alpha";
  const paletteKey = palettes[colorType];
  let radixColorName = colorName;

  if (isAlpha) {
    radixColorName += "A";
  }

  const rgbaColorObject = new ColorTranslator(
    paletteKey[colorName][themeColor][`${radixColorName}${index + 1}`]
  );

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