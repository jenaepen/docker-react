import React, {useEffect, useState, Fragment} from 'react'
const axios = require('axios');

const App = function(){
    const [count, setCount] = useState()

    useEffect(()=>{
        axios.get("/visits").then(res =>{
            setCount(res.data)
        }).catch( error=>{console.log(error)})
    },[])

    function addToCount(){
        axios.get("/visits/add").then(res =>{
            setCount(res.data)
        }).catch( error=>{console.log(error)})
    }
    return(<Fragment>
    <div>Fetching Button Press Count: {count} Presses</div>
    <div>I love hiren I love you more than pop pop</div>
        <button onClick={addToCount}>Increment Count</button>
        </Fragment>)
}

export default App