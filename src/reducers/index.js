import { hexToRgb, rgbToHex } from '../utilities/helpers';

export const ColorsReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SLIDERS':
      return {
        ...state,
        rgb: action.payload,
      };
    case 'SELECT_COLOR':
      return {
        ...state,
        hex: action.payload,
        rgb: hexToRgb(action.payload),
      };
    case 'SLIDER_RESET':
      return {
        ...state,
        rgb: hexToRgb(action.payload),
      };
    case 'SLIDER_SUBMIT':
      return {
        ...state,
        hex: rgbToHex(action.payload),
      };
    default:
      return state;
  }
};

export const RGBReducer = (state, action) => {
  switch (action.type) {
    case 'r':
      return {
        ...state,
        r: action.payload,
      };
    case 'g':
      return {
        ...state,
        g: action.payload,
      };
    case 'b':
      return {
        ...state,
        b: action.payload,
      };
    default:
      return state;
  }
};
