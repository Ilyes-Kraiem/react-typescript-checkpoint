import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Ilyes" />
      <Counter />
    </div>
  );
};
export default App;