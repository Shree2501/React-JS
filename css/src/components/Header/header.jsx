import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Shree</h3>
      <button className={styles.btn}>Click me</button>
    </div>
  )
}

export default Header
