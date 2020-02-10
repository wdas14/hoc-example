import React from 'react';
import './App.css';

import HelloWorld from '../src/components/HelloWorld';
import hocExample from '../src/hoc/example';

const App = () => {

  const NewComponent = hocExample(HelloWorld);
  const property = 'props man'

  return (
    <div className="App">
      Hello world!
      <NewComponent property={property} />
    </div>
  );
}

export default App;
