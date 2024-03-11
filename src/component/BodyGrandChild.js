

function BodyGrandChild(props) {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body Grand Child</h1>
                <button onClick={props.addFunc}>Add</button>

            </div>
        </div>
    )
}


export default BodyGrandChild