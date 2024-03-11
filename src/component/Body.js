import BodyChild from "./BodyChild"
import BodyChildTwo from "./BodyChildTwo"
import React from 'react'


function Body(props) {
//THIS IS DESTRUCTURING THE DATA 
//LITERALLY SAME WAY AS PROPS

const [counter, setCounter] = React.useState(0)

function add() {

    setCounter(prevCounter => prevCounter + 1)
}

    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body</h1>
                
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyChild addFunc={add} showFunc={props.showFunc} displayElements={props.displayElements}/>
                </div>
                <div className="col-sm-6">
                    <BodyChildTwo number={counter} />
                </div>
            </div>
        </div>
    )
}

export default Body