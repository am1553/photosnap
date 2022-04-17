import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'
import MenuIcon from '../../assets/shared/mobile/menu.svg'
import CloseIcon from '../../assets/shared/mobile/close.svg'

function Header() {

    const [menu, setMenu] = useState(false)

    let navigate = useNavigate();

    const handleStories = () => {
        navigate("/stories")
        setMenu(!menu)
    }
    const handleFeatures = () => {
        navigate("/features")
        setMenu(!menu)
    }
    const handlePricing = () => {
        navigate("/pricing")
        setMenu(!menu)
    }
    const handleInviteButton = () => {
        setMenu(!menu)
    }


  return (
    <div className='header'>
        <div className="mobile">
            <img src={ Logo } alt="" onClick={ ()=> navigate("/") }/>
            <button onClick={ ()=> setMenu(!menu) }>
                <img src={ menu === false ? MenuIcon : CloseIcon } alt="" />
            </button>
            <div className="overlay" style={ menu === false ? {display: 'none'} : null }></div>
            <nav style={ menu === true ? {height: '332px'} : {height: '0px', padding: '0px'} }>
                <li onClick={ handleStories }>stories</li>
                <li onClick={ handleFeatures }>features</li>
                <li onClick={ handlePricing }>pricing</li>
                <hr />
                <button className='invite_button' onClick={ handleInviteButton }><h4>get an invite</h4></button>
            </nav>
        </div>

        <div className="tablet">
            <img src={ Logo } alt="" onClick={ ()=> navigate("/") }/>
            <nav>
            <li onClick={ () => {navigate("/stories")}}>stories</li>
                <li onClick={ () => {navigate("/features")}}>features</li>
                <li onClick={ () => {navigate("/pricing")}}>pricing</li>
            </nav>
            <button className='invite_button'><h4>get an invite</h4></button>
        </div>
    </div>
  )
}

export default Header