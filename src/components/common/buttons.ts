import styled from 'styled-components';
import { fontFamily, fontSize, color } from './styles';
import { device } from './breakpoints';

export const NavBtn = styled.button`
    line-height: 50px;
    border: 0;
    font-family: ${fontFamily.JosefinBold};
    font-size: ${fontSize.fontS};
    height: 40px;
    color: ${props => props.theme.color.titleText};
    transition: .2s;
    background-color: ${color.transparent};
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.color.error};
        border-bottom: 1px solid ${props => props.theme.color.activeButton};
    }

    &:focus {
        color: ${props => props.theme.color.error};
    }
`;

export const SighBtn = styled.button`
    white-space: nowrap;
    height: 30px;
    font-family: ${fontFamily.UnbReg};
    font-size: ${fontSize.fontXXS};
    color: ${props => props.theme.color.activeButton};
    transition: .2s;
    background-color: ${props => props.theme.color.button};
    align-items: center;
    cursor: pointer;
`;

export const LeftSignBtn = styled(SighBtn)`
    border-radius: 20px 0 0 20px;
    margin-right: -1px;

    @media ${device.tabletL} {
        border-radius: 20px;
        width: 250px;
    }

    &:hover {
        color: ${props => props.theme.color.button};
        background-color: ${props => props.theme.color.activeButton};
    }
`;

export const RightSignBtn = styled(SighBtn)`
    border-radius: 0 20px 20px 0;

    @media ${device.tabletL} {
        border-radius: 20px;
        width: 250px;
    }

    &:hover {
        color: ${props => props.theme.color.button};
        background-color: ${props => props.theme.color.activeButton};
    }
`;