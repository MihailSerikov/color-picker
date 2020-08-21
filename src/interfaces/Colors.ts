export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface HEXColor {
  value: string;
}

export interface Colors extends HEXColor {
  name: string;
}
