import { Color } from './Colors';

export interface ColorPickerProps {
  value: Color['value'];
  onChange: () => void;
  colors: Color[];
}
