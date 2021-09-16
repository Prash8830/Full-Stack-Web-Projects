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
        let newtext = text.replace(/ /g, "");
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
            <h1 id="txtx">Text Investigator For Everyone</h1>
            <div class="container" id="txtx">
                <label for="comment">Enter Text :</label>
                <textarea class="form-control" rows="5" id="comment" value={text} onChange={handleOnChange} placeholder={text}></textarea>
            </div>
            <button className="btn btn-primary" id="txtxg" onClick={handleUpclick}>To Upper Case</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleLoclick}>To Lower Case</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleClclick}>Clear</button>
            <button className="btn btn-primary" id="txtxg" onClick={handleReclick}>Remove Space</button>
            <div id="txtx">
                <h1>Text Analysis :</h1>
                <p>1) No. of Words : {text.split(" ").length}</p>
                <p>2) No. of Characters : {text.length}</p>
                <p>3) Minutes Required To Read: {0.008 * text.split(" ").length}</p>
                <p>4) No. of Words starting with Vowel: {getvowelcount(text)}</p>
            </div>
        </>
    )
}
