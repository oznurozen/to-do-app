import React from 'react'
import Form from './HeaderForm'

function Header() {
  return (
    <div>
        <header className="header">
            <h1>Yapılacaklar Listesi</h1>
            <Form/>
        </header>
    </div>
  )
}

export default Header