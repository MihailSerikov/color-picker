import React, { createContext, useEffect, useReducer } from 'react';
import { ColorBox } from '../ColorBox/ColorBox';
import { ColorSliders } from '../ColorSliders/ColorSliders';
import { ColorsList } from '../ColorsList/ColorsList';
import { Dropdown } from '../Dropdown/Dropdown';

import { Colors, HEXColor } from '../../interfaces/Colors';
import { ColorsReducer } from '../../reducers';
import { hexToRgb } from '../../utilities/helpers';

import styles from './ColorPicker.module.scss';

interface ColorPickerProps {
  value: HEXColor['value'];
  onChange: (value: HEXColor['value']) => void;
  colors: Colors[];
}

interface ColorsReducerContextProps {
  dispatch: ({}) => void;
}

export const ColorsReducerContext = createContext<ColorsReducerContextProps>({
  dispatch: () => {
    return null;
  },
});

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  colors,
}) => {
  const colorObj = {
    hex: value,
    rgb: hexToRgb(value),
  };

  const [state, dispatch] = useReducer(ColorsReducer, colorObj);

  useEffect(() => {
    onChange(state.hex);
  }, [state.hex, onChange]);

  return (
    <ColorsReducerContext.Provider value={{ dispatch }}>
      <div className={styles.container}>
        <div className={styles.text}>{state.hex}</div>
        <Dropdown trigger={<ColorBox color={state.rgb} />}>
          <ColorSliders
            rgbValue={state.rgb}
            hexValue={state.hex}
          ></ColorSliders>
        </Dropdown>
        <Dropdown
          trigger={React.createElement(
            'div',
            null,
            <i className={styles.arrowDown}></i>,
          )}
        >
          <ColorsList colors={colors} />
        </Dropdown>
      </div>
    </ColorsReducerContext.Provider>
  );
};
