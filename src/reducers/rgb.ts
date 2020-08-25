import { RGBColor } from '../interfaces/Colors';

export type RGBAction = {
  type: string;
  payload: number;
};

export const RGBReducer = (state: RGBColor, action: RGBAction): RGBColor => {
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
