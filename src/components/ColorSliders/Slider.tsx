import React, { Dispatch } from 'react';
import { RGBAction } from '../../reducers/rgb';

import styles from './Slider.module.scss';

interface SliderProps {
  value: number;
  type: 'r' | 'g' | 'b';
  dispatch: Dispatch<RGBAction>;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  type,
  dispatch,
}: SliderProps) => {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: type,
      payload: +value,
    });
  };

  return (
    <div className={styles.container}>
      <label htmlFor={`${type}-slider`}>{type}</label>
      <input
        id={`${type}-slider`}
        type="range"
        min="0"
        max="255"
        step="1"
        value={value}
        className={`${styles[type]}`}
        onChange={handleChange}
      />
    </div>
  );
};
