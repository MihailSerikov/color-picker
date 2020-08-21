import React, { useContext, useEffect, useReducer } from 'react';
import { RGBReducer } from '../../reducers';
import { ColorsReducerContext } from '../ColorPicker/ColorPicker';
import { Slider } from './Slider';
import cx from 'classnames';

import styles from './ColorSliders.module.scss';

import { Colors, RGBColor } from '../../interfaces/Colors';
import { DropdownContext } from '../Dropdown/Dropdown';

interface ColorSlidersProps {
  rgbValue: RGBColor;
  hexValue: Colors;
}

export const ColorSliders: React.FC<ColorSlidersProps> = ({
  rgbValue,
  hexValue,
}) => {
  const [state, dispatch] = useReducer(RGBReducer, rgbValue);
  const { dispatch: changeColor } = useContext(ColorsReducerContext);
  const { setOpen } = useContext(DropdownContext);

  const resetSlider = () => {
    changeColor({ type: 'SLIDER_RESET', payload: hexValue });
    setOpen(false);
  };

  const submitSlider = () => {
    changeColor({ type: 'SLIDER_SUBMIT', payload: rgbValue });
    setOpen(false);
  };

  useEffect(() => {
    changeColor({ type: 'CHANGE_SLIDERS', payload: state });
  }, [state, changeColor]);

  return (
    <div className={styles.container}>
      <Slider value={state.r} type="r" dispatch={dispatch} />
      <Slider value={state.g} type="g" dispatch={dispatch} />
      <Slider value={state.b} type="b" dispatch={dispatch} />
      <div className={styles.actions}>
        <button
          className={cx(styles.btn, styles.cancel)}
          type="button"
          onClick={resetSlider}
        >
          Cancel
        </button>
        <button
          className={cx(styles.btn, styles.submit)}
          type="button"
          onClick={submitSlider}
        >
          Ok
        </button>
      </div>
    </div>
  );
};
