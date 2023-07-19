import React ,{useState} from 'react'
import Calculator from '../Component/Calculator/Calculator';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [numCalculators, setNumCalculators] = useState(1);
  const Navigate = useNavigate();
  const calculators = Array.from({ length: numCalculators }, (_, index) => (
    <Calculator key={index} setNumCalculators={setNumCalculators} numCalculators={numCalculators} />
  ));
  const HandleClick =()=>{
    setNumCalculators(numCalculators + 1);

  }
  return (
    <div>
    <button onClick={()=>{
          Navigate('/auth')
    }}>Log Out</button>
    <button onClick={HandleClick}>Add calculator</button>
    <div style={{display:'flex',flexWrap:'wrap' ,justifyContent:'center'}}>
    {calculators}

    </div></div>
  )
}

export default Home