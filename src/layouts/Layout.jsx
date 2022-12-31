import React from 'react'
import Nav from '../components/Nav'
import Header from './Header'
import Footers from './Footers'

const Layout = (props) => {
  return (
    <div>
    <Nav/>
    <Header/>
    <div>
        {props.children}
    </div>
    <Footers/>
    </div>
  )
}

export default Layout