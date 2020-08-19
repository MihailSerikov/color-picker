import React from 'react';
import { Color } from '../../interfaces/Colors';
import { ColorBox } from '../ColorBox';

import styles from './ColorsList.module.scss';

interface ColorsListProps {
  colors: Color[];
  onItemClick: (color: string) => any;
}

export const ColorsList: React.FC<ColorsListProps> = ({
  colors,
  onItemClick,
}: ColorsListProps) => {
  return (
    <div className={styles.list}>
      {colors.map(({ name, value }) => (
        <li
          key={name}
          className={styles.item}
          onClick={() => onItemClick(value)}
        >
          {name}
          <ColorBox color={value} />
        </li>
      ))}
    </div>
  );
};
