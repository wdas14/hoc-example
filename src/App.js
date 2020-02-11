import React from 'react';
import './App.css';

import hocExample from '../src/hoc/example';
import HelloWorld from '../src/components/HelloWorld';
import DataComponent from '../src/components/DataComponent';

const App = () => {

  const NewComponent = hocExample(HelloWorld);
  const property = 'props man'

  return (
    <div className="App">
      Hello world!
      <NewComponent property={property} />
      <DataComponent />
    </div>
  );
}

export default App;
