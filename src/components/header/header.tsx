import React from 'react';
import { HeaderContainer, NavigationContainer, RightContainer, SignContainer, TitleContainer, TitleIcon, TitleText } from './header.styles';
import { Img } from '../common/styles';
import NavButton from './btns/btns';
import SignUp from './btns/signUp';
import SignIn from './btns/signIn';
import Switcher from './switcher/switcher';
import { Outlet } from 'react-router-dom';

const Header = (props: any) => {
    return(
        <>
            <HeaderContainer>
                <TitleContainer>
                    <TitleIcon src={Img.IconHeader}/>
                    <TitleText>{props.title}</TitleText>
                </TitleContainer>
                <NavigationContainer>
                    <NavButton to='/' text='Home'/>
                    <NavButton to='/cocktails' text='Cocktails'/>
                    <NavButton to='/ingredients' text='Ingredients'/>
                    <NavButton to='/about' text='About'/>
                </NavigationContainer>
                <RightContainer>
                    <SignContainer>
                        <SignIn to='/signin' text='Sign In'/>
                        <SignUp to='/signup' text='Sign Up'/>
                    </SignContainer>
                    <Switcher/>
                </RightContainer>
            </HeaderContainer>
            <Outlet/>
        </>
    )
}

export default Header;