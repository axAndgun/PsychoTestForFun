import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { stopPropagation } from '../../utils/commons'

function ClientSideLink({ children, href, style }) {
    return (
    <Link href={href}>
        <a href={href} onClick={stopPropagation} style={style}>
        {children}
        </a>
    </Link>
    )

}

export default ClientSideLink