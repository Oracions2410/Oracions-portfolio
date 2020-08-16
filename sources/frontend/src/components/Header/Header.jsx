import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {




    return <React.Fragment>


        <header id="home" class="header">

            <div class="topbar">
                <span>Oracions.dev@gmail.com</span>
                <img src="./images/icons/topbar-icon.svg" alt="" />
                <span>+237 656-914-671</span>
            </div>

            <div class="banner">
                <img class="left-image" src="./images/icons/banner-left.svg" alt="" />
                <div class="intro">
                    <h2 class="text-intro">Hello, I'm <span>Oracion's</span></h2>
                    <h2 class="text-intro">I'm a full stack developper</h2>
                    <a href="#my-work"><button href="#my-work" class="btn header-btn"><img
                        src="./images/icons/arrow-button.svg" alt="" />View
                my work</button></a>
                </div>
                <img class="right-image" src="./images/icons/lines.svg" alt="" />
            </div>

            <div class="navbar">
                <div class="menu">
                    <div id="menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <ul>
                    <li class="active">
                        <HashLink
                            to="/home#home"
                            smooth={true}
                            duration={500}
                        >Home</HashLink>
                    </li>

                    <li>
                        <HashLink
                            to='/home#services'
                            smooth={true}
                            duration={500}
                        >Services</HashLink>
                    </li>

                    <li>
                        <HashLink to='/home#my-work'
                            smooth={true}
                            duration={500}
                        >Portefolio</HashLink>
                    </li>

                    <li>
                        <HashLink
                            to='/home#blog'
                            smooth={true}
                            duration={500}
                        >Blog
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            to='/home#contact'
                            smooth={true}
                            duration={500}
                        >contact
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            to='/home#about'
                            smooth={true}
                            duration={500}
                        >About
                        </HashLink>
                    </li>
                </ul>
            </div>

        </header>


    </React.Fragment>
}

export default Header