import React, { useState } from 'react';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { COLORS } from './utilities/constants';

const App: React.FC = () => {
  const [state, setState] = useState('#000000');
  return (
    <div className="App">
      <ColorPicker
        value={state}
        onChange={(color) => {
          // setState(color);
          console.log('Color has been changed on', color);
        }}
        colors={COLORS}
      />
    </div>
  );
};

export default App;
