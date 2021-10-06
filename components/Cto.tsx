import React from 'react'
import Link from 'next/link'
import styles from '../styles/Components/Cto.module.css'

const Cto: React.FC<{ name: string, href: string }> = props => {
    return (
        <div className={`${styles.cto} flex flex-ai-c flex-jc-c`}>
            <Link href={props.href}>
                <a className={`${styles.cto__a}`}>
                    {props.name}
                </a>
            </Link>
        </div>
    )
}

export default Cto
