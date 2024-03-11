import HeaderChild from "./HeaderChild"
import HeaderChild2 from "./HeaderChildTwo"

function Header(props) {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Header</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <HeaderChild showBoolean={props.showBoolean} />
                </div>
                <div className="col-sm-6">
                    <HeaderChild2 addElementFunc={props.addElementFunc}/>
                </div>
            </div>
        </div>
    )
}


export default Header