import React, { useContext } from 'react';
import { Color } from '../../interfaces/Colors';
import { ColorBox } from '../ColorBox';
import { ColorsReducerContext } from '../ColorPicker';

import styles from './ColorsList.module.scss';

interface ColorsListProps {
  colors: Color[];
}

export const ColorsList: React.FC<ColorsListProps> = ({
  colors,
}: ColorsListProps) => {
  const { dispatch: changeColor } = useContext(ColorsReducerContext);

  return (
    <div className={styles.list}>
      {colors.map(({ name, value }) => (
        <li
          key={name}
          className={styles.item}
          onClick={() => changeColor({ type: 'hex', payload: value })}
        >
          {name}
          <ColorBox color={value} />
        </li>
      ))}
    </div>
  );
};
