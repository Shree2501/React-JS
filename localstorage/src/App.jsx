import React from 'react'

const App = () => {
  localStorage.setItem('user','Shree')
  localStorage.setItem('age','18')
  localStorage.removeItem('ager')
  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user,age);
  
  const obj = {
    'user':'Shree',
    'age':'18',
    'branch':'DS'
  }
  localStorage.setItem('arr',JSON.stringify(obj))
  console.log(obj);
  
  const u = JSON.parse(localStorage.getItem('arr'))
  console.log(u);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
