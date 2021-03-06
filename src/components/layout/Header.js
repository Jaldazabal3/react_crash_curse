import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/" >Home</Link> | <Link to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  marginLeft: '20px',
}
