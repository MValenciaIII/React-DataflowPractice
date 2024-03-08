import HeaderChild from "./HeaderChild"
import HeaderChild2 from "./HeaderChildTwo"

function Header() {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Header</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <HeaderChild />
                </div>
                <div className="col-sm-6">
                    <HeaderChild2 />
                </div>
            </div>
        </div>
    )
}


export default Header