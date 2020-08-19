import React from 'react';
import styles from './ColorBox.module.scss';

interface ColorBoxProps {
  color: string;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ color }: ColorBoxProps) => {
  return <div className={styles.box} style={{ background: color }}></div>;
};
