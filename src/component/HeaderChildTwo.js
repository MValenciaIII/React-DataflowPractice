

function HeaderChild2(props) {


    return (
        <div className="container">
            <div className="row">
                <h1>I'm the HeaderChild2</h1>
                <button onClick={props.addElementFunc}>Add element</button>
            </div>
        </div>
    )
}

export default HeaderChild2