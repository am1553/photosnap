import React, { useState } from 'react'
import Logo from '../../assets/shared/desktop/logo.svg'
import MenuIcon from '../../assets/shared/mobile/menu.svg'
import CloseIcon from '../../assets/shared/mobile/close.svg'

function Header() {

    const [menu, setMenu] = useState(false)

  return (
    <div className='header'>
        <div className="mobile">
            <img src={ Logo } alt="" />
            <button onClick={ ()=> setMenu(!menu) }>
                <img src={ menu === false ? MenuIcon : CloseIcon } alt="" />
            </button>
            <div className="overlay" style={ menu === false ? {display: 'none'} : null }></div>
            <nav style={ menu === true ? {height: '332px'} : {height: '0px', padding: '0px'} }>
                <li>stories</li>
                <li>features</li>
                <li>pricing</li>
                <hr />
                <button className='invite_button'><h4>get an invite</h4></button>
            </nav>
        </div>

        <div className="tablet">
            <img src={ Logo } alt="" />
            <nav>
                <li>stories</li>
                <li>features</li>
                <li>pricing</li>
            </nav>
            <button className='invite_button'><h4>get an invite</h4></button>
        </div>
    </div>
  )
}

export default Header