import React, { useEffect, useReducer, useState } from 'react';
import { ColorPickerProps } from '../../interfaces/ColorPicker';
import { ColorsReducer } from '../../reducers';
import { hexToRgb } from '../../utilities/helpers';
import { ColorBox } from '../ColorBox';
import { ColorSliders } from '../ColorSliders/ColorSliders';
import { ColorsList } from '../ColorsList';
import { Dropdown } from '../Dropdown';

import styles from './ColorPicker.module.scss';

export const ColorsReducerContext = React.createContext<any>({});

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  colors,
}: ColorPickerProps) => {
  // const [color, setColor] = useState(value);
  const colorObj = {
    hex: value,
    rgb: hexToRgb(value),
  };

  const [state, dispatch] = useReducer(ColorsReducer, colorObj);

  useEffect(() => {
    console.log('state', state);
    onChange();
  }, [state]);

  return (
    <ColorsReducerContext.Provider value={{ dispatch }}>
      <div className={styles.container}>
        <div className={styles.text}>{state.hex}</div>
        <Dropdown trigger={<ColorBox color={state.hex} />}>
          <ColorsList colors={colors} />
        </Dropdown>
        <Dropdown
          trigger={React.createElement(
            'div',
            null,
            <i className={styles.arrowDown}></i>,
          )}
        >
          <ColorSliders initValue={state.rgb}></ColorSliders>
        </Dropdown>
      </div>
    </ColorsReducerContext.Provider>
  );
};
