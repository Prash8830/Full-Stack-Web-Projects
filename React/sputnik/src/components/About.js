import React from 'react'
// import PropTypes from 'prop-types'


export default function About(props) {
    // const [mystyle, setmystyle] = useState({color: 'black',
    // backgroundColor: 'white'})
    // const [btntext, setbtntext] = useState("Enable Dark Mode")
    // const toggleStyle = () =>{
    //     if(mystyle.color==='black')
    //     {
    //         setmystyle({color: 'lightgreen',backgroundColor: '#073642'})
    //         setbtntext("Enable Light Mode")
    //     }
    //     else{
    //         setmystyle({color: 'black',backgroundColor: 'white'})
    //         setbtntext("Enable Dark Mode")
    //     }
    // }

    return (

        <div className="container" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>
            <h1 className="my-5">About Section :</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'red':'#212529'}}>
                            Text Investigator
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>
                            <b>Text Investigator is made for text analytics also some useful transformations</b>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'red':'#212529'}}>
                            Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>
                            <b>You can enable dark mode </b>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'red':'#212529'}}>
                            Connect
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#073642':'white',color: props.mode === 'dark'?'lightgreen':'#212529'}}>
                            <b>All Options are available Go to home page</b>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary" id="txtx" onClick={toggleStyle}>{btntext}</button> */}
        </div>

    )
}
