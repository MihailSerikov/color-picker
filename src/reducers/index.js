import { hexToRgb, rgbToHex } from '../utilities/helpers';

export const ColorsReducer = (state, action) => {
  console.log('colors changed !!!', action);
  switch (action.type) {
    case 'rgb':
      return {
        hex: rgbToHex(action.payload),
        rgb: action.payload,
      };
    case 'hex':
      return {
        hex: action.payload,
        rgb: hexToRgb(action.payload),
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
