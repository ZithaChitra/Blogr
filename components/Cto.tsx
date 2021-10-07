import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from '../styles/Components/Cto.module.css'


let cx = classNames.bind(styles)


interface CtoProps{
    name: string,
    href: string,
    transparent?: boolean
}

export class Cto extends React.Component<CtoProps> {
    render() {
        let transparent = this.props.transparent
        let container_class = cx({
            cto: true,
            t: transparent ? true : false
        })

        let a_class = cx({
            cto__a: true,
            at: transparent ? true : false
        })
        return (
            <div className={`${container_class} flex flex-ai-c flex-jc-c`}>
                <Link href={this.props.href}>
                    <a className={a_class}>
                        {this.props.name}
                    </a>
                </Link>
            </div>
        )
    }
}

export default Cto


