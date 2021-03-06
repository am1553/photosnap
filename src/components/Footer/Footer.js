import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'

import FaceBookLogo from '../../assets/shared/desktop/facebook.svg'
import YoutubeLogo from '../../assets/shared/desktop/youtube.svg'
import TwitterLogo from '../../assets/shared/desktop/twitter.svg'
import PinterestLogo from '../../assets/shared/desktop/pinterest.svg'
import InstagramLogo from '../../assets/shared/desktop/instagram.svg'
import ArrowImage from '../ArrowImage/ArrowImage'

function Footer() {
    let navigate = useNavigate()
  return (
    <div className='footer'>
        <div className="left">
            <img src={ Logo } alt="" className='footer_logo' onClick={ () => {navigate("/")} }/>
            <div className="socials">
                <ul>
                    <li>
                        <img src={ FaceBookLogo } alt="" />
                    </li>
                    <li>
                        <img src={ YoutubeLogo } alt="" />
                    </li>
                    <li>
                        <img src={ TwitterLogo } alt="" />
                    </li>
                    <li>
                        <img src={ PinterestLogo } alt="" />
                    </li>
                    <li>
                        <img src={ InstagramLogo } alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="middle">
            <nav>
                <li onClick={ () => {navigate("/")} }><h3>home</h3></li>
                <li onClick={ () => {navigate("/stories")} }><h3>stories</h3></li>
                <li onClick={ () => {navigate("/features")} }><h3>features</h3></li>
                <li onClick={ () => {navigate("/pricing")} }><h3>pricing</h3></li>
            </nav>
        </div>
        <div className="right">
            <button>
                <h4>get an invite</h4>
                <ArrowImage isFilter={ true }/>
            </button>
            <p>Copyright 2019. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer