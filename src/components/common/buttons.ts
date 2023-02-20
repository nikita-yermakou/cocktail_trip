import styled from 'styled-components';
import { fontFamily, fontSize, color } from './styles';

export const NavBtn = styled.button`
    line-height: 50px;
    border: 0;
    font-family: ${fontFamily.JosefinBold};
    font-size: ${fontSize.fontM};
    height: 50px;
    color: ${props => props.theme.color.text};
    transition: .2s;
    background-color: ${color.transparent};
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.color.underline};
        border-bottom: 1px solid ${props => props.theme.color.text};
    }

    &:focus {
        color: ${props => props.theme.color.underline};
    }
`;

export const SighBtn = styled.button`
    white-space: nowrap;
    height: 40px;
    font-family: ${fontFamily.UnbReg};
    font-size: ${fontSize.fontS};
    color: ${props => props.theme.color.text};
    transition: .2s;
    background-color: ${color.transparent};
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.color.underline};
    }
`;

export const LeftSignBtn = styled(SighBtn)`
    border-radius: 20px 0 0 20px;
    margin-right: -1px;
`;

export const RightSignBtn = styled(SighBtn)`
    border-radius: 0 20px 20px 0;
`;