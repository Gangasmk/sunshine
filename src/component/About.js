import React,{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
// import Navbar from './Navbar';

export default function About() {
    let [mystyle , setmystyle] = useState({
        color:'black',
        backgroundColor:'white'
       
    });
    let [btn,setBtn] =useState('Enable Dark mode')

    const toggleMode = () =>
    {
        if(mystyle.color ==='black')
        {
            setmystyle({
                color:'black',
        backgroundColor:'white'
        
            })
            setBtn('Enable Light mode');
        }
        else {
            setmystyle ({
            color:'White',
            backgroundColor:'black',
            border : '1px solid white'
            })
            setBtn('Enable Dark mode');
        }
    }

  return (
      <div className='container' style={mystyle}>
         {/* <Navbar home="Home" about="About us" carrier="Carrier with us"/>  */}
          <h1>About Us</h1>
          <Accordion defaultActiveKey="0"  style={mystyle}>
              <Accordion.Item eventKey="0"  style={mystyle}>
                  <Accordion.Header  style={mystyle}>Accordion Item #1</Accordion.Header>
                  <Accordion.Body  style={mystyle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"  style={mystyle}>
                  <Accordion.Header  style={mystyle}>Accordion Item #2</Accordion.Header>
                  <Accordion.Body  style={mystyle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <div className='mt-3 mb-3'>
          <Button onClick={toggleMode} variant="primary">{btn}</Button>
          </div>
      </div>
  )
}
