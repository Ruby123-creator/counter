import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
const Calculator = ({setNumCalculators ,numCalculators}) => {
  const [title ,setTitle] = useState('')
  const [count ,setCount] = useState(0)
  const [titlebtn ,setTitlebtn] = useState(false)
  const [countbtn ,setcountbtn] = useState(false)

    const dispatch = useDispatch();
    
    const value = useSelector(state=>state);
    console.log(value);
    const HandleKeyDown = (e)=>{
      if (e.key === 'Enter') {
        dispatch({type:"SET_TITLE" ,payload:title});
        setTitlebtn(false);
      }
    }
    const HandleCount = (e)=>{
      if (e.key === 'Enter') {
        dispatch({type:"SET_COUNT" ,payload:count});
        setcountbtn(false);
      }
    }
  return (
    <div className ="container">
    <div>
    <button onClick={()=>{
      setNumCalculators(numCalculators-1)
    }}>delete</button>
      <h3>
        {value.title}
      </h3>
      <div>
      <div>
        <input type="text" value={value.count} />
      </div>
      <div className='counterbtn'>
      <button onClick={()=>{
      dispatch({type:"INCREMENT"});
    }}>+</button>
      <button onClick={()=>{
      dispatch({type:"DECREMENT"});
    }}>-</button>
      </div>
      <div className='calfun' style={{display:'flex' ,flexDirection:'column' ,justifyContent:'center' ,alignItems:'center'}}>
      <div>
        <button onClick={()=>{
      dispatch({type:"RESET"});
    }}>Reset</button>
    </div>
    <div>
    {
      titlebtn ? <input type='text' onKeyDown={HandleKeyDown}
       onChange={(e)=>setTitle(e.target.value)}/>:<button
       onClick={()=>{
       setTitlebtn(true)
    }}>Counter Name</button>
    }
    </div>
    <div>  
    {
      countbtn ? <input type='number' onKeyDown={HandleCount}
       onChange={(e)=>setCount(e.target.value)}/>:<button
       onClick={()=>{
       setcountbtn(true)
    }}>Start Value</button>
    }
    </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Calculator