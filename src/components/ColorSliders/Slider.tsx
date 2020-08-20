import React, { useState } from 'react';

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
    console.log('Changed');
    dispatch({
      type: type,
      payload: +value,
    });
  };

  return (
    <input
      type="range"
      min="0"
      max="255"
      step="1"
      value={value}
      onChange={handleChange}
    />
  );
};
