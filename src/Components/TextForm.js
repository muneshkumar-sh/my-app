import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        const newText=text.toUpperCase();
        setText(newText);

    }

    const handleLowClick=()=>{
        console.log("Lowercase was clicked"+text);
        const newText=text.toLowerCase();
        setText(newText);

    }

    const handleclearClick=()=>{
        console.log("Clear text was clicked");
        const newText="";
        setText(newText);

    }

    const handlecopyClick=()=>{
        console.log("Copy text was clicked");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleremoveSpacesClick=()=>{
        console.log("Remove extra spaces was clicked");
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);

    }
    const[text, setText]=useState('Enter text here');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'grey':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleremoveSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='white'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Text to preview here"}</p>
        </div>
    </>
  )
}
