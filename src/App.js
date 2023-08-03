import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import TaxCalculator from './components/TaxCalculator';
import TimeConversion from './components/TimeConversion';

function App() {
  return (
    <div className="App">
      {/* <Button >Click Me</Button>
       */}
       <Counter/>
       <TimeConversion milliseconds={5200}/>
       <TaxCalculator income={400000} savings={20000}/>
    </div>
  );
}

export default App;
