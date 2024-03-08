import BodyGrandChild from "./BodyGrandChild"
import BodyGrandChildTwo from "./BodyGrandChildTwo"


function BodyChild() {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body Child</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyGrandChild />
                </div>
                <div className="col-sm-6">
                    <BodyGrandChildTwo />
                </div>
            </div>
        </div>
    )
}

export default BodyChild