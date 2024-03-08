import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
    const [counter, setCounter] = React.useState(1)

    return (

        <div className="container">
            <div className="row">
                <h1>Hello Dataflow</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Header />
                </div>
                <div className="col-sm-6">
                    <Body number={counter}/>
                </div>
            </div>
        </div>
    )
}

export default App