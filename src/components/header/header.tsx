import React from 'react';
import { HeaderContainer, NavigationContainer, RightContainer, SignContainer, TitleContainer, TitleIcon, TitleText } from './header.styles';
import { Img } from '../common/styles';
import NavButton from './btns/btns';
import SignUp from './btns/signUp';
import SignIn from './btns/signIn';
import Switcher from './switcher/switcher';
import { Outlet } from 'react-router-dom';
import { HeaderProps } from './header.interface';

const Header = (props: HeaderProps): JSX.Element => {
    return(
        <>
            <HeaderContainer>
                <TitleContainer>
                    <TitleIcon src={Img.IconHeader}/>
                    <TitleText>{props.title}</TitleText>
                </TitleContainer>
                <NavigationContainer>
                    <NavButton to='/' text='Home'/>
                    <NavButton to={`/cocktails/${`a`}`} text='Cocktails'/>
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