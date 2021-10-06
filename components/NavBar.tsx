import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cto from './Cto'

import styles from '../styles/Components/Navbar.module.css'
import logo from '../public/images/logo.svg';

const Navbar: React.FC = () => {
    return (
        <div>
            <header className={`${styles.navbar}`}>
                <nav className={`${styles.navbar__nav} flex flex-jc-sb flex-ai-c gb-padding`}>

                    <div className={`navbar__logo-links flex flex-ai-c`}>
                        <div className={`navbar__logo`}>
                            <Image src={logo} alt='logo' />
                        </div>

                        <ul className={`${styles.navbar__links} hide-for-mobile`}>
                            <Link href='/'>
                                <a className={`${styles.navbar__a}`}>Product</a>
                            </Link>
                            <Link href='/'>
                                <a className={`${styles.navbar__a}`}>Company</a>
                            </Link>
                            <Link href='/'>
                                <a className={`${styles.navbar__a}`}>Connect</a>
                            </Link>
                        </ul>
                    </div>


                    <div className={`${styles.navbar__cto} flex flex-ai-c hide-for-mobile`}>
                        <Link href='/'><a className={`${styles.navbar__a}`}>Login</a></Link>
                        <Cto name='Sign Up' href='/'/>
                    </div>

                    <div id='btnHamburger' className={`${styles.navbar__toggle} hide-for-desktop`}>
                        <span className={`${styles.span}`}></span>
                        <span className={`${styles.span}`}></span>
                        <span className={`${styles.span}`}></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
