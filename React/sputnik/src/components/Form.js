import React, { useState } from 'react'

export default function Form(props) {

    const handleUpclick = () => {
        // console.log('Uppercase was clicked'+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoclick = () => {
        // console.log('Uppercase was clicked'+ text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClclick = () => {
        // console.log('Uppercase was clicked'+ text);
        let newtext = "";
        setText(newtext);
    }
    const handleReclick = () => {
        // console.log('Uppercase was clicked'+ text);
        let newtext = text.replace(/[ ]+/g, " ");
        setText(newtext);
    }
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }
    function getvowelcount(data) {
        var testStr = data.split(' ');
        var vowelRegex = '^[aieouAIEOU].*';
        let count = 0;
        for(let i = 0; i < testStr.length; i++) {
            var matched = testStr[i].match(vowelRegex);
            if(matched) {count++;}
        }
        return count;
    }

    const [text, setText] = useState('your text goes here');
    // setText("Prashant");
    return (
        <>
            <h1 id="txtx" style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>Text Investigator For Everyone</h1>
            <div className="container" id="txtx">
                <label htmlFor="comment" style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>Enter Text :</label>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'red':'#212529'}} rows="5" id="comment" value={text} onChange={handleOnChange} placeholder={text}></textarea>
            </div>
            <button className="btn btn-primary" id="txtxg" onClick={handleUpclick}>To Upper Case</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleLoclick}>To Lower Case</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleClclick}>Clear</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleReclick}>Remove Space</button>
            <div id="txtx">
                <h1 style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>Text Analysis :</h1>
                <p style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>1) No. of Words : {text.length===0?0:text.split(" ").length}</p>
                <p style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>2) No. of Characters : {text.length}</p>
                <p style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>3) Minutes Required To Read: {text.length===0?0:0.008 * text.split(" ").length}</p>
                <p style={{color: props.mode === 'dark'?'lightgreen':'#212529'}}>4) No. of Words starting with Vowel: {getvowelcount(text)}</p>
            </div>
        </>
    )
}
