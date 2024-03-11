import BodyGrandChild from "./BodyGrandChild"
import BodyGrandChildTwo from "./BodyGrandChildTwo"


function BodyChild(props) {
console.log(props)

    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body Child</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyGrandChild addFunc={props.addFunc} />
                </div>
                <div className="col-sm-6">
                    <BodyGrandChildTwo showFunc={props.showFunc} displayElements={props.displayElements}/>
                </div>
            </div>
        </div>
    )
}

export default BodyChild