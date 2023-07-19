import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route ,Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import Login from './Component/Auth/Login';
function App() {
  const Navigate= useNavigate();
  useEffect(()=>{
   if(!localStorage.getItem('user')){
      Navigate('/auth')
   }
  },[Navigate])
  return (
    <div className="App">
        <h2>Welcom to Counter Calculator</h2>

      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
