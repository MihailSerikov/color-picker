import { RGBColor } from '../types/Colors';

export interface Color {
  name: string;
  value: string;
}

export interface ColorObj {
  rgb: RGBColor;
  hex: string;
}
