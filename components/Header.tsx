import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Components/Header.module.css'

import logo from '../public/images/logo.svg';

const Header: React.FC = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav className='header__nav flex flex-jc-sb'>
                    
                    <Image src={logo} alt='logo' />

                    <ul className='header__links hide-for-mobile'>
                        <Link href='/'>
                            <a>Product</a>
                        </Link>
                        <Link href='/'>
                            <a>Company</a>
                        </Link>
                        <Link href='/'>
                            <a>Connect</a>
                        </Link>
                    </ul>

                    

                    <div id='btnHamburger' className='header__toggle hide-for-desktop'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <ul className='header__menu hide-for-desktop'>
                    <Link href='/'>
                        <a>Product</a>
                    </Link>
                    <Link href='/'>
                        <a>Company</a>
                    </Link>
                    <Link href='/'>
                        <a>Connect</a>
                    </Link>
                </ul>
            </header>
        </div>
    )
}

export default Header
