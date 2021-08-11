import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebarItem,SideBtnWrapper,SideBtn} from './SidebarElements';

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarItem>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarItem>
                <SideBtnWrapper>
                    <SideBtn to='/signin' onClick={toggle}>Sign In</SideBtn>
                </SideBtnWrapper>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
