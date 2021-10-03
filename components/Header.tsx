import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import logo from '../public/images/logo.svg';

const Header: React.FC = () => {
    return (
        <div className='Header'>
            <header>
                <nav className='header__nav'>
                    <Link href='/#' passHref>
                        <Image src={logo} alt='logo' />
                    </Link>


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
                <ul className='header__menu'>
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
