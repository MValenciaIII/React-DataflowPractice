import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
    const [isShown, setIsShown] = React.useState(false)
    const [listElements, setListElements] = React.useState([])

    function showName() {

        //Making a callback function for needed old value to change to opposite value
        setIsShown(prevIsShown => !prevIsShown)
        console.log(isShown)
    }

    function addAnotherElement() {

        //CALLBACK FUNCTION Since we are utilizing old data and just adding a new index.
        setListElements(prevListElements => [...prevListElements, `Child ${prevListElements.length + 1}`])
        console.log(listElements)
    }


    //DISPLAY Counter in BodyChildTwo BUTTON in bodyGrandChild
    //If Grandchildtwo is click show name in HEaderChild
    //BUtton in Headerchildtwo and display grandchildtwo PTAGS childs 1,2,3


    return (

        <div className="container">
            <div className="row">
                <h1>Hello Dataflow</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Header showBoolean={isShown} addElementFunc={addAnotherElement}/>
                </div>
                <div className="col-sm-6">
                    <Body showFunc={showName} displayElements={listElements}/>
                </div>
            </div>
        </div>
    )
}

export default App