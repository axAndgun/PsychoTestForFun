import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { stopPropagation } from '../../utils/commons'
import styled from 'styled-components'
import {fadeIn} from '../../styles/SpecialEffect'

const RedLink = styled.a`
  color: #8134af;
  :hover{
      color: #dd2a7b;
  } 
 
`
function ClientSideLink({ children, href }) {
    return (
    <Link href={href}>
        <RedLink href={href} onClick={stopPropagation}> 
        {children}
        </RedLink>
    </Link>
    )

}

export default ClientSideLink