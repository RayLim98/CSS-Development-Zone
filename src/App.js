import logo from './logo.svg';
import './App.css';
import SelectField from './components/text-input/SelectField';
import { useState } from 'react';
import GradiantWrapper from './components/wrapper/gradiantWrapper';
import InputField from './components/text-input/InputSelect';
import CircleLoader from './components/wrapper/CircleLoader';
import MultiColorLoader from './components/wrapper/MultiColorLoader';

const options = [ 
  {
    label: 'Name',
    value: 'raymond'
  },
  {
    label: 'Name',
    value: 'Jono'
  }
 
]

function App() {
  return (
    <div className="App">
      <SelectField 
        options={options} 
      />
      <InputField
        placeholder={'Input field'}
        label={'label'}
      />
      <GradiantWrapper/>
      <CircleLoader/>
      <MultiColorLoader/> 
    </div>
  );
}

export default App;
