import React from 'react';
import './App.css';

import HelloWorld from '../src/components/HelloWorld';
import hocExample from '../src/hoc/example';

const App = () => {

  const NewComponent = hocExample(HelloWorld);

  return (
    <div className="App">
      Hello world!
      <NewComponent />
    </div>
  );
}

export default App;
