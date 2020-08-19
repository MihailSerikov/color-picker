import React, { useEffect, useState } from 'react';
import { ColorPickerProps } from '../../interfaces/ColorPicker';
import { ColorBox } from '../ColorBox';
import { ColorsList } from '../ColorsList';
import { Dropdown } from '../Dropdown';

import styles from './ColorPicker.module.scss';

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  colors,
}: ColorPickerProps) => {
  const [color, setColor] = useState(value);

  useEffect(() => {
    console.log('value', value);
    onChange();
  }, [color]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>{color}</div>
      <Dropdown trigger={<ColorBox color={color} />}>
        <ColorsList colors={colors} onItemClick={setColor} />
      </Dropdown>
      <Dropdown
        trigger={React.createElement(
          'div',
          null,
          <i className={styles.arrowDown}></i>,
        )}
      >
        <div>Hello</div>
      </Dropdown>
    </div>
  );
};
