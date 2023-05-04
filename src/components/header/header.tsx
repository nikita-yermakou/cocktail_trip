import React, { useEffect } from 'react';
import { AuthorizeText, HeaderContainer, LogOutBtn, NavigationContainer, RightContainer, SignContainer, TitleContainer, TitleIcon, TitleText } from './header.styles';
import { Img } from '../common/styles';
import NavButton from './btns/btns';
import SignUp from './btns/signUp';
import SignIn from './btns/signIn';
import Switcher from './switcher/switcher';
import { Outlet } from 'react-router-dom';
import { HeaderProps } from './header.interface';
import { useAppDispatch, useAppSelector } from 'components/common/hooks';
import { getUser, removeUser } from 'redux/slices/userSlice';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = (props: HeaderProps): JSX.Element => {

    const dispatch = useAppDispatch();
    const auth = getAuth();
    const {email, check} = useAppSelector(state => state.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            dispatch(
                getUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                    check: auth.currentUser
                })
            );
        });
    }, [auth.currentUser]);

    const LogOut = () => {
        signOut(auth);
        dispatch(removeUser());
    }

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
                    {
                        check
                        ? <>
                            <AuthorizeText>Hello, {email}</AuthorizeText>
                            <LogOutBtn onClick={LogOut}>Log out</LogOutBtn>
                        </> 
                        : <SignContainer>
                            <SignIn to='/signin' text='Sign In'/>
                            <SignUp to='/signup' text='Sign Up'/>
                        </SignContainer>
                    }
                    <Switcher/>
                </RightContainer>
            </HeaderContainer>
            <Outlet/>
        </>
    )
}

export default Header;