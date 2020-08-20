import React, { useContext, useEffect, useReducer } from 'react';
import { RGBReducer } from '../../reducers';
import { RGBColor } from '../../types/Colors';
import { ColorsReducerContext } from '../ColorPicker';
import { Slider } from './Slider';

interface ColorSlidersProps {
  initValue: RGBColor;
}

export const ColorSliders: React.FC<ColorSlidersProps> = ({
  initValue,
}: ColorSlidersProps) => {
  const [state, dispatch] = useReducer(RGBReducer, initValue);
  const { dispatch: changeColor } = useContext(ColorsReducerContext);
  // console.log('changeColor', changeColor);
  // console.log('state', state);

  useEffect(() => {
    // console.log('state', state);
    // here should be dispatch from ColorPicker component from context
    changeColor({ type: 'rgb', payload: state });
  }, [state]);

  return (
    <div>
      <Slider value={state.r} type="r" dispatch={dispatch} />
      <Slider value={state.g} type="g" dispatch={dispatch} />
      <Slider value={state.b} type="b" dispatch={dispatch} />
      <div>
        <button type="button">Cancel</button>
        <button type="button">Ok</button>
      </div>
    </div>
  );
};
