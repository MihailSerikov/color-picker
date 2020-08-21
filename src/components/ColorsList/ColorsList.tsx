import React, { useContext } from 'react';
import { Colors, HEXColor } from '../../interfaces/Colors';
import { ColorBox } from '../ColorBox/ColorBox';
import { ColorsReducerContext } from '../ColorPicker/ColorPicker';
import { DropdownContext } from '../Dropdown/Dropdown';

import styles from './ColorsList.module.scss';

interface ColorsListProps {
  colors: Colors[];
}

export const ColorsList: React.FC<ColorsListProps> = ({ colors }) => {
  const { dispatch: changeColor } = useContext(ColorsReducerContext);
  const { setOpen } = useContext(DropdownContext);

  const handleChangeColor = (value: HEXColor['value']) => {
    changeColor({ type: 'SELECT_COLOR', payload: value });
    setOpen(false);
  };

  return (
    <div className={styles.list}>
      {colors.map(({ name, value }) => (
        <li
          key={name}
          className={styles.item}
          onClick={() => handleChangeColor(value)}
        >
          {name}
          <ColorBox color={value} />
        </li>
      ))}
    </div>
  );
};
