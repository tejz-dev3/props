import React, { useState } from 'react'
import Child from '../Child/Child'


function Parent() {
const [receiveData, setReceivedData] = useState('')
    //receiving tht data from child in function
    const receiveMessage = (data) =>{
       setReceivedData(data)
    }
  return (
    <div>
        <p>{receiveData}</p>
        <Child fromChildToParent={receiveMessage}/>
    </div>
  )
}

export default Parent