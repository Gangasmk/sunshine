import React,{useState} from 'react';
import PropTypes from 'prop-types';
// import Navbar from './Navbar';


export default function Form(props) {

  const clicktoUpp =(e) =>{
    e.preventDefault(); 
    let newtext = text.toUpperCase();
    settext(newtext);
    console.log('uppercase was clicked');
  }
  const clicktoLow =(e) =>{
    e.preventDefault(); 
    let newtext = text.toLowerCase();
    settext(newtext);
    console.log('lowercase was clicked');
  }
  const clicktoclear =(e) =>{
    e.preventDefault(); 
    let newtext = " ";
    settext(newtext);
    console.log('lowercase was clicked');
  }
  const clicktoCopy = (e) =>
  {
    e.preventDefault(); 
    let text = document.getElementById('exampleFormControlTextarea1')
    text.Selected();
    navigator.clipboard.write(text.value)
  }

  const removeExtraSpace =(e) =>
  {
    e.preventDefault(); 
    let newText = text.split(/[ ]+/);
    settext(newText.join(""));
  }

  const handleOnchange = () =>{
    console.log('text area was clicked');
    // eslint-disable-next-line no-restricted-globals
    settext(event.target.value); 
    // settext(event.target.value); this will set the value of text area so we can type
  }
  const [text, settext] = useState('');
  // const [text, settext] = useState('Enter text here'); just for texsting in text area
  // this is hook, settext set the state of text and display in the 'Enter text area'
  return (
    <>
    <div>
    {/* <Navbar home="Home" about="About us" carrier="Carrier with us" mode="Mode"/>  */}
      <form>
        <div className="form-group mb-3 mt-3">
          <label for="exampleFormControlTextarea1" style={{color:props.mode === "dark" ? "white":"black"}}><h3>{props.title}</h3></label>
          <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==="dark"?" grey":"white", color:props.mode === "dark" ? "white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={clicktoUpp}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={clicktoLow}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clicktoclear}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={clicktoCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra space</button>
      </form>
    </div>
    <div className='container my-4' style={{color:props.mode === "dark" ? "white":"black"}}>
    <h4>Text Suumry</h4>
    <p>{text.split(" ").length} words {text.length} characters</p>
    <h4>Preview</h4>
    <p>{text.length>0 ? text : "Enter somthing in the text box to Preview"}</p>
    </div>
    </>
  )
} 

Form.propTypes = {title: PropTypes.string.isRequired}

Form.defaultProps = {title : "Set title here"}