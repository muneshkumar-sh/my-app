import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import TodoList from './Components/TodoList';
// import Counter from './Components/stateCounter';
import React, {useState} from 'react'
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='grey';
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" about="About Us" home="Home" mode={mode} toggleMode={toggleMode}/>
    <TextForm/>
    <TodoList />

    </>
  );
}

export default App;