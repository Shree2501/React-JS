import React from 'react'

const App = () => {
  function clickBtn(){
    console.log("button is clicked");  
  }

  function inputChange(val){
    console.log(val);  
  }

  function Scroll(val){
    if(val > 0){
      console.log("Downward Scrolling at speed: ",val);
    }
    else{
      console.log("Upward Scrolling at speed: ",val);
    }
    
  }

  return (
    <div>
      <div>
        <h1>Hello, Shree</h1>
        <button onClick={clickBtn}>Change</button><br></br>
        <button onClick={()=>{
          console.log("Hello Shree");  
        }}>Click me</button>
      </div>
      <div>
        <input type='text' placeholder='Enter your name' 
        onChange={function(elem){
          inputChange(elem.target.value)
        }}></input>
      </div>
      <div onWheel={(elem) =>{
        Scroll(elem.deltaY);   
      }}>
        <div className='page1'>Page1</div>
        <div className='page2'>Page2</div>
        <div className='page3'>Page3</div>
      </div>
    </div>
  )
}

export default App
