import { generateFillColor } from "../helpers/colors/generateFillColor";

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
  const fillColor = generateFillColor('SOLID', font.color);

  const text = figma.createText();

  text.fontName = { family: font.family, style: font.style };
  text.fontSize = font.size;
  text.textCase = font.case;
  text.characters = font.characters;
  text.fills = fillColor;
  text.opacity = font.opacity || 1;

  return text;
};

export { createText };
