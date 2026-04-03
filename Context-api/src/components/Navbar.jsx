import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContextData } from '../context/ThemeContext'

const Navbar = () => {
    const [theme] = useContext(ThemeContextData)

  return (
    <div className={theme}>
        <h2>Nexus</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar
