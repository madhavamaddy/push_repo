import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='About'>About</Link>
        <Link to='Product'>Product</Link>
        <Link to='ErrorPage'></Link>
        </nav>
        
      </div>
    )
  }
}

export default Header