

function HeaderChild(props) {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the Header Child</h1>
                {/* {props.showBoolean ? <p>Michael Valencia</p> : ""} */}
                {props.showBoolean && <h3>Michael Valencia</h3>}
            </div>
        </div>
    )
}

export default HeaderChild