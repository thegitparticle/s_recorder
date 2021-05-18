import React from 'react';
import type {Node} from 'react';
import RootStack from './src/navigation/RootStack';

const App: () => Node = () => {
  return <RootStack />;
};

export default App;
