import { useState } from 'react'
import { useDevkut } from '@/hooks'
import { ProfileContainer } from '@/components/Profile'
import { MenuWrapper } from '@/styles/menu'

function Menu(props) {
    const { isOpen } = useDevkut()

    return (
        <MenuWrapper {...props} className={isOpen?'':'hidden'}>
            <ProfileContainer />
        </MenuWrapper>
    )
}
export { Menu }