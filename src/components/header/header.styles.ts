import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';
import '../../index.css';
import { SighBtn } from 'components/common/buttons';
import { device } from 'components/common/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 55px;
    background-color: ${props => props.theme.color.cardsBg};
    font-size: ${fontSize.fontL};
    font-family: ${fontFamily.JosefinReg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1.5rem;
    position: relative;
    z-index: 1;

    @media ${device.tabletL} {
        padding: .5rem .5rem;
    }

    @media ${device.mobileS} {
        max-width: 100vw;
    }
`;

export const NavigationContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: calc(50% - 125px);
    top: 3px;

    @media ${device.tabletL} {
        position: static;
        flex-direction: column;
        text-align: center;
        width: auto;
        height: 110px;
        margin-top: 1rem;
    }
`;

export const SignContainer = styled.div`
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;

    @media ${device.tabletL} {
        width: 250px;
        flex-direction: column;
        text-align: center;
        gap: .5rem;
        margin-top: 4rem;
    }
`;

export const RightContainer = styled.div`
    gap: 1rem;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 50px;
    z-index: 1;
    position: absolute;
    top: 3px;
    right: 70px;

    @media ${device.tabletL} {
        justify-content: center;
        position: static;
    }
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    margin-right: 7px;
    
    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 4rem;
        gap: 0;
    } 
`;

export const AuthorizeText = styled.p`
    font-size: ${fontSize.fontXS};
    white-space: nowrap;

    @media ${device.tabletL} {
        display: block;
    }
`;

export const LogOutBtn = styled(SighBtn)`
    border-radius: 20px;

    @media ${device.tabletL} {
        width: 250px;
    }

    &:hover {
        color: ${props => props.theme.color.button};
        background-color: ${props => props.theme.color.activeButton};
    }
`;

export const BurgerMenuBtn = styled.div`
    width: 30px;
    height: 30px;
    display: none;
    transition: .3s;

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledBurgerBtnIcon = styled(FontAwesomeIcon)`
    height: 18px;
`;

export const BurgerMenuList = styled.div<{check: boolean}>`

    @media ${device.tabletL} {
        height: 100vh;
        position: fixed;
        top: 55px;
        left: ${props => props.check ? '0px' : '-100%'};
        background-color: ${props => props.theme.color.bg};
        z-index: 1;
        display: flex;
        opacity: ${props => props.check ? '1' : '0'};
        flex-direction: column;
        padding: 0 1rem;
        transition: .3s;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;
