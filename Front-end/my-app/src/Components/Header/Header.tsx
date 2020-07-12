import React from 'react'
import './Header.css'
import logo from '../../asset/images/logo.png'
import grope from '../../asset/images/grope.png'
export default function Header() {
    return (
        <header className="App-header">
            <div className='header-section-1'>
                <img className='img-logo' src={logo} alt="" />
                <img className='img-logo' src={grope} alt="" />
            </div>
            <div className='main-nav'>
                <nav className="navbar-off">
                    <ul className='navbar-off-ul'>
                        <i className="fa fa-caret-down"></i>  
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'> לידים חמים </a> </li>
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'>קבל הצעות אישיות</a> </li>
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'>תגמול שותיפם</a> </li>
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'>הוספת נכס</a> </li>
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'>מחשבון שטחים</a> </li>
                        <li className="navbar-off-li"><a href="#!" className='navbar-off-a'>מועדפים</a> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
