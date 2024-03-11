

function BodyGrandChildTwo(props) {
    console.log(props)

    const listOfElements = props.displayElements.map((currentItem) => {
        return <h3>{currentItem}</h3>
    })

    return (
        <div className="container">
            <div className="row">
                <h1 onClick={props.showFunc}>I'm the Body Grand Child Two</h1>
                {/* <h3>{props.displayElements}</h3> */}
                {listOfElements}
            </div>
        </div>
    )
}


export default BodyGrandChildTwo