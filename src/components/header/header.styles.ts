import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';
import '../../index.css';
import { SighBtn } from 'components/common/buttons';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.color.cardsBg};
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontL};
    font-family: ${fontFamily.JosefinReg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    position: relative;
`;

export const TitleContainer = styled.div`
    width: 240px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const TitleIcon = styled.img`
    width: 60px;
    height: 60px;
`;

export const TitleText = styled.h3`
    font-family: ${fontFamily.UnbBold};
    font-size: ${fontSize.fontL};
`;

export const NavigationContainer = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: calc(50% - 150px);
`;

export const SignContainer = styled.div`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const RightContainer = styled.div`
    gap: 1rem;
    display: flex;
    justify-content: right;
    align-items: center;
`;

export const AuthorizeText = styled.p`
    font-size: ${fontSize.fontM};
    white-space: nowrap;
`;

export const LogOutBtn = styled(SighBtn)`
    border-radius: 20px;
`;
