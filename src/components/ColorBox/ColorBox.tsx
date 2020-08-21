import React from 'react';
import styles from './ColorBox.module.scss';
import { RGBColor } from '../../interfaces/Colors';

interface ColorBoxProps {
  color: string | RGBColor;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div
      className={styles.box}
      style={{
        background: `${
          typeof color == 'string'
            ? color
            : `rgb(${color.r}, ${color.g}, ${color.b} )`
        }`,
      }}
    ></div>
  );
};
