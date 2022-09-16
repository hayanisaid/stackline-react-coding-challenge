import * as React from 'react'
import logo from '../../assets/stackline_logo.svg'
import s from './Header.module.css'

const Header: React.FunctionComponent = () => {
  return (
    <header className={s.container}>
      <img width={45} height={65} src={logo} className={s.logo} alt="logo" />
    </header>
  )
}

export default Header
