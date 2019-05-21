import React from 'react';
import './App.css';
import Fields from './Components/Fields/fields';
import Rules from './Components/Rules/rules';

const  App = () => {
  return (
      <div className='rootContainer'>
        <Rules />
        <Fields />
      </div>
  )

}

export default App;
