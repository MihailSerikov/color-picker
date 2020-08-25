import { RGBColor, HEXColor } from '../interfaces/Colors';
import { hexToRgb, rgbToHex } from '../utilities/helpers';

export type ActionProps = {
  type: string;
  payload: RGBColor | HEXColor['value'];
};

export type ColorsState = {
  hex: HEXColor['value'];
  rgb: RGBColor;
};

export const ColorsReducer = (
  state: ColorsState,
  action: ActionProps,
): ColorsState => {
  switch (action.type) {
    case 'CHANGE_SLIDERS':
      return {
        ...state,
        rgb: action.payload as RGBColor,
      };
    case 'SELECT_COLOR':
      return {
        ...state,
        hex: action.payload as HEXColor['value'],
        rgb: hexToRgb(action.payload) as RGBColor,
      };
    case 'SLIDER_RESET':
      return {
        ...state,
        rgb: hexToRgb(action.payload) as RGBColor,
      };
    case 'SLIDER_SUBMIT':
      return {
        ...state,
        hex: rgbToHex(action.payload as RGBColor) as HEXColor['value'],
      };
    default:
      return state;
  }
};
