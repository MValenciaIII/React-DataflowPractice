import React from "react";


function UseEffect(props) {
    const [apiData, setApiData] = React.useState({})
    const [submitBoolean, setSubmitBoolean] = React.useState(false)
    const [num, setNum] = React.useState(1)


    //We are pulling data from External SRC (API) so we need to use a "useEffect" hook.
    //useEffect has Two parameters.
    //FIrst one is Required.
    //Second PARAMETER is optional

    function changeNumber(event) {
        
        console.log(event.target.value)
        setNum(event.target.value)
    }

    function submitNum(event) {
        event.preventDefault()
        setSubmitBoolean(prevSubmitBoolean => !prevSubmitBoolean)
       
    }

    React.useEffect(() => {
        console.log("Effect Ran")
        fetch(`https://api.isevenapi.xyz/api/iseven/${num}/`)
        .then(res => res.json())
        .then(data => setApiData(data))
    }, [submitBoolean])

    //console.log(apiData)
    console.log(num)

    return(

        <div className="container">
            <div className="row">
                <form onSubmit={(e) => submitNum(e)} action="">
                    <h1>Hello UseEffect</h1>
                    <input type="text" onChange={(e) => changeNumber(e)} value={num} name="num" id="" />
                    <button>submit</button>
                    {apiData.iseven ? <h3>This number is Even </h3> : <h3>This Number ISN't EVEN</h3>}
                </form>
            </div>
        </div>
    )
}

export default UseEffect