import React, { useState } from 'react'

const App = () => {
  const[name, setName] = useState("Shree")
  const[num, setNum] = useState([10,20,30])
  const[n, setn] = useState(10)
  function Change(){
    let newName = {...name}
    newName = "Sharma"
    setName(newName)

    const newNum = [...num]
    newNum.push(90)
    setNum(newNum)
  }
  function incN(){
    setn(prev => (prev+1))
    setn(prev => (prev+1))
    setn(prev => (prev+1))
  }
  return (
    <div>
      <h1>Name is {name} <br/> {num}</h1>
      <button onClick={Change}>Click</button>
      <br/>
      <h1>{n}</h1>
      <button onClick={incN}>jump3</button>
    </div>
  )
}

export default App
