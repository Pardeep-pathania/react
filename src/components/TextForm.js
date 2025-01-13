import React, {useState} from 'react'

export default function TextForm(props) {

    function handleUpClick() {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }  

    const handleLoClick =()=>{
        //console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }  
    const handleClearClick =()=>{
        let newText = ("");
        setText(newText);
    }  

    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    } 

    const handleCopy = () => {
      //console.log("Text Copy")
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText] = useState("");

  return (
    <>
     <div className="container" style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>

    <div className="container my-3"style={{color:props.mode=== 'dark'?'white':'black'}} >
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>

    </div>
    </>
    
  ) 
  
}
