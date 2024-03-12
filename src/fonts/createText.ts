import { getColorTranslated } from "../helpers/colors/getColorTranslated";

const colorFill = getColorTranslated('SOLID', '#FF00FF');

type TextCaseTypes = 'LOWER' | 'ORIGINAL' | 'TITLE' | 'UPPER';

type FontProps = {
  family: string;
  style: 'Light' | 'Regular' | 'Medium' | 'Semi Bold' | 'Bold';
  size: number;
  case: TextCaseTypes;
  color: string;
  characters: string;
  opacity?: number;
};

const createText = (font: FontProps) => {
  const text = figma.createText();

  text.fontName = { family: font.family, style: font.style };
  text.fontSize = font.size;
  text.textCase = font.case;
  text.characters = font.characters;
  text.fills = colorFill;
  text.opacity = font.opacity || 1;

  return text;
};

export { createText };
