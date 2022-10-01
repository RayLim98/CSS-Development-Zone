import './App.css';
import SelectField from './components/text-input/SelectField';
import InputField from './components/text-input/InputSelect';
import { CircleLoader } from './components/loader/CircleLoader';
import { MultiColorLoader } from './components/loader/MultiColorLoader';
import { BubbleMenu } from './components/menu/bubble-menu';
import { GradiantWrapper } from './components/loader/gradiantWrapper';
import { createGlobalStyle } from 'styled-components';
import MultiSelect from './components/text-input/MultiSelect';

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
const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto';
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <MultiSelect
        options={options} 
      />
      <SelectField 
        options={options} 
      />
      <InputField
        placeholder={'Input field'}
        label={'label'}
      />
      <GradiantWrapper isLoading={true}/>
      <CircleLoader/>
      <MultiColorLoader/> 
      <BubbleMenu/>
    </div>
  );
}

export default App;
