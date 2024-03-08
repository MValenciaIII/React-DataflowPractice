import BodyChild from "./BodyChild"
import BodyChildTwo from "./BodyChildTwo"


function Body() {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyChild />
                </div>
                <div className="col-sm-6">
                    <BodyChildTwo />
                </div>
            </div>
        </div>
    )
}

export default Body