import React from 'react'

function Child({fromChildToParent}) {
  const HandleClick = () =>{
    const dataAlert = alert("Hi I'm from Child")
    fromChildToParent = dataAlert
  }

  return (
    <div>
        <button onClick={HandleClick}>Click me</button>
    </div>
  )
}

export default Child