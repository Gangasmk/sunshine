import React,{useState} from 'react';
import './App.css';
//  import About from './component/About';
import Navbar from './component/Navbar';
import Form from './component/Form';
import NewAlert from './component/NewAlert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [alert, setAlert] =useState(null);

  const showAlert =(messege,type) =>{
    setAlert({
      msg:messege,
      type:type
    })
  }
  
  const [mode ,setMode] = useState('dark');
  const toggleMode =()=>
  {
    if(mode === "dark")
    {
      setMode('light');
      document.body.style.backgroundColor="white"
    showAlert('light mode has been enabled', 'Sucesss')
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert('Dark mode has been enabled', 'Sucesss')
    }
  }

  return (
   <>
      <div className='container'>
        <Navbar home="Home" about="About us" carrier="Carrier with us" mode={mode}  toggleMode={toggleMode}/>
        {/* <NewAlert alert={alert}/> */}
        <Form title="Enter Text here " mode={mode} />
      
  
 {/* <div className='container'>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form title="Enter Text here " mode={mode} />}>
          </Route>
          
          <Route path="/About" element={<About />}>
          </Route>
        </Routes>
  </BrowserRouter>
 </div> */}
 </div>
 </> 
  );
}

export default App;
