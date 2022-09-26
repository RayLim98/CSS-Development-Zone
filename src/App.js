import './App.css';
import SelectField from './components/text-input/SelectField';
import InputField from './components/text-input/InputSelect';
import CircleLoader from './components/loader/CircleLoader';
import MultiColorLoader from './components/loader/MultiColorLoader';
import BubbleMenu from './components/menu/bubble-menu';
import GradiantWrapper from './components/loader/gradiantWrapper';

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
      <GradiantWrapper isLoading={true}/>
      <CircleLoader/>
      <MultiColorLoader/> 
      <BubbleMenu/>
    </div>
  );
}

export default App;
