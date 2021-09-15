import React, { useState } from 'react'

export default function Form(props) {

    const handleUpclick = () => {
        console.log('Uppercase was clicked'+ text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value);
    }

    const [text, setText] = useState('IronMan');
    // setText("Prashant");
    return (
        <>
            <h1 >Hi, welcome {props.name} - {text} !</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <label htmlFor="basic-url" className="form-label">WebUrl</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
            </div>

            <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea className="form-control" onChange={handleOnChange}  placeholder={text} aria-label="With textarea" value={text}></textarea>
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleUpclick}>ToUpper</button>
            <br />
            <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
            <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
        </>
    )
}
