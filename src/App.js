import './App.css';
import { useState } from 'react';
import Calculator from './Component/Calculator/Calculator';
function App() {
  const [numCalculators, setNumCalculators] = useState(0);
  const calculators = Array.from({ length: numCalculators }, (_, index) => (
    <Calculator key={index} setNumCalculators={setNumCalculators} numCalculators={numCalculators} />
  ));
  const HandleClick =()=>{
    setNumCalculators(numCalculators + 1);

  }
  return (
    <div className="App">
      <button onClick={HandleClick}>Add calculator</button>
      <div style={{display:'flex',flexWrap:'wrap' ,justifyContent:'center'}}>
      {calculators}

      </div>
    </div>
  );
}

export default App;
