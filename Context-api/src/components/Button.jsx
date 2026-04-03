import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext';

const Button = () => {
    const [, setTheme] = useContext(ThemeContextData)
    const changeTheme = ()=>{
        setTheme('dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Button
