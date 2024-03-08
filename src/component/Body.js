import BodyChild from "./BodyChild"
import BodyChildTwo from "./BodyChildTwo"


function Body({number}) {
//THIS IS DESTRUCTURING THE DATA 
//LITERALLY SAME WAY AS PROPS

    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Body</h1>
                
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyChild number={number}/>
                </div>
                <div className="col-sm-6">
                    <BodyChildTwo />
                </div>
            </div>
        </div>
    )
}

export default Body