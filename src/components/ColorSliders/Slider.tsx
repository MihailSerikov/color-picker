import React, { useState } from 'react';

import styles from './Slider.module.scss';

interface SliderProps {
  value: number;
  type: 'r' | 'g' | 'b';
  dispatch: ({}) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  type,
  dispatch,
}: SliderProps) => {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${type} Slider value changed`);
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
