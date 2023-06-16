import { useEffect, useState } from 'react';
import { AuthorizeText, BurgerMenuBtn, BurgerMenuList, HeaderContainer, LogOutBtn, NavigationContainer, RightContainer, SignContainer, StyledBurgerBtnIcon, UserContainer} from './header.styles';
import { Img } from '../common/styles';
import NavButton from './btns/btns';
import SignUp from './btns/signUp';
import SignIn from './btns/signIn';
import Switcher from './switcher/switcher';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderProps } from './header.interface';
import { useAppDispatch, useAppSelector } from 'components/common/hooks';
import { getUser, removeUser } from 'redux/slices/userSlice';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import LogoBtn from './btns/logoBtn';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { changeBurgerMenuState } from 'redux/slices/burgerMenuSlice';

const Header = (props: HeaderProps): JSX.Element => {

    const [burgerCheck, setBurgerCheck] = useState(false);
    const path = useLocation();
    const dispatch = useAppDispatch();
    const auth = getAuth();
    const {email, check} = useAppSelector(state => state.user);

    const clickBurgerBtn = () => {
        setBurgerCheck(!burgerCheck);
    }

    useEffect(() => {
        dispatch(
            changeBurgerMenuState({
                burgerMenuState: burgerCheck
            })
        )
    }, [burgerCheck])

    useEffect(() => {
        setBurgerCheck(false);
    }, [path])

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            dispatch(
                getUser({
                    email: auth.currentUser ? user.email : '',
                    token: auth.currentUser ? user.accessToken : '',
                    id: auth.currentUser ? user.uid : '',
                    check: auth.currentUser ? auth.currentUser : ''
                })
            );
        });
    }, [auth.currentUser]);

    const LogOut = () => {
        signOut(auth);
        setBurgerCheck(false);
        dispatch(removeUser());
    }

    return(
        <>
            <HeaderContainer>
                <BurgerMenuBtn onClick={clickBurgerBtn}>
                    {
                        burgerCheck === true
                        ? <StyledBurgerBtnIcon icon={faXmark} />
                        : <StyledBurgerBtnIcon icon={faBars} />
                    }
                </BurgerMenuBtn>
                <LogoBtn to='/' img={Img.IconHeader} title={props.title}/>
                <BurgerMenuList check={burgerCheck}>
                    <NavigationContainer>
                        <NavButton to='/' text='Home'/>
                        <NavButton to={`/cocktails/${`a`}`} text='Cocktails'/>
                        <NavButton to='/about' text='About'/>
                    </NavigationContainer>
                    <RightContainer>
                        {
                            check
                            ? <UserContainer>
                                <AuthorizeText>Hello, {email}</AuthorizeText>
                                <LogOutBtn onClick={LogOut}>Log out</LogOutBtn>
                            </UserContainer> 
                            : <SignContainer>
                                <SignIn to='/signin' text='Sign In'/>
                                <SignUp to='/signup' text='Sign Up'/>
                            </SignContainer>
                        }
                    </RightContainer>
                </BurgerMenuList>
                <Switcher/>
            </HeaderContainer>
            <Outlet/>
        </>
    )
}

export default Header;