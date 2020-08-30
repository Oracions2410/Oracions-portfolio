import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'

import './Custom.module.css'

const Header = () => {
    let location = useLocation()


    //alert(location.pathname)

    if (!(location.pathname === '/home' || location.pathname === '/')) {
        return <React.Fragment>


            <header style={{ height: 'auto' }} id="home" class="header">

                <div class="topbar">
                    <span>Oracions.dev@gmail.com</span>
                    <img src="./images/icons/topbar-icon.svg" alt="" />
                    <span>+237 656-914-671</span>
                </div>

                <div style={{ position: 'fixed', top: '0' }} class="navbar">
                    <div class="menu">
                        <div id="menu-icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <ul>
                        <li class="active">
                            <a href="/">Home</a>
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

    return <React.Fragment>


        <header id="home" class="header">

            <div class="topbar">
                <span>Oracions.dev@gmail.com</span>
                <img src="./images/icons/topbar-icon.svg" alt="" />
                <span>+237 656-914-671</span>
            </div>

            <div class="banner">
                <img class="left-image" src="https://drive.google.com/uc?export=view&id=1JVZ3oDo1lEdBO_yNsMQ5QcpDqcVEeUoy" alt="" />
                <div class="intro">
                    <h2 class="text-intro">Hello, I'm <span>Oracion's</span></h2>
                    <h2 class="text-intro">I'm a full stack developper</h2>
                    <a href="#my-work"><button href="#my-work" class="btn header-btn"><img
                        src="./images/icons/arrow-button.svg" alt="" />View
                my work</button></a>
                </div>
                <img class="right-image" src="https://drive.google.com/uc?export=view&id=1sJ_eCgjT6CH7_70x9C_mwHGSnlOSDAf2" alt="" />
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
                        <a href="/">Home</a>
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