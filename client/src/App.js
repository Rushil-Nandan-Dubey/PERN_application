import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import InputMaterial from './components/InputMaterial';
import ListMaterials from './components/ListMaterials';

function App() {
  return (
    <Fragment>
      <div className = "container">
        <InputMaterial/>
        <ListMaterials/>
      </div>
    </Fragment>
  );
}

export default App;
