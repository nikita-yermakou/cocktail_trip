import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';
import { SighBtn } from 'components/common/buttons';
import { device } from 'components/common/breakpoints';

export const FormContainer = styled.div`
    font-family: ${fontFamily.JosefinReg};
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.cardsBg};
    text-align: center;
    margin: 3rem auto;
    max-width: 340px;
    height: 340px;
    padding: 1.8rem;
    
    @media ${device.mobileS} {
        height: 330px;
    }
`;

export const FormTitle = styled.h2`
    font-size: ${fontSize.fontL};
    margin: 0 0 1rem;
    
    @media ${device.moblieS} {
        font-size: ${fontSize.fontM};
    }
`;

export const FormFieldContainer = styled.div`
    font-size: ${fontSize.fontM};
    border-radius: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .1rem;
    margin-bottom: .4rem;
    text-align: left;
    
    @media ${device.moblieS} {
        font-size: ${fontSize.fontS};
    }
`;

export const FormField = styled.input`
    border-radius: 10px;
    width: 100%;
    height: 50px;
    font-size: ${fontSize.fontS};
    
    @media ${device.moblieS} {
        font-size: ${fontSize.fontXS};
    }
`;

export const FormRedirect = styled.p`
    font-size: ${fontSize.fontS};
    color: ${props => props.theme.color.titleText};
    margin: .7rem 0;
    
    @media ${device.mobileS} {
        font-size: ${fontSize.fontXS};
    }
`;

export const FormLink = styled(Link)`
    width: 100%;
`;

export const SendBtn = styled(SighBtn)`
    border-radius: 15px;
    width: 100%;
    height: 35px;
    font-size: ${fontSize.fontM};
    margin: 1.1rem 0 .5rem;
    font-family: ${fontFamily.JosefinReg};
    
    @media ${device.moblieS} {
        height: 30px;
        font-size: ${fontSize.fontS};
        margin: 1rem 0 .2rem;
    }
    
    &:disabled {
        opacity: 0.5;
    }
    
    &:enabled {
        opacity: 1;
        
        &:hover {
            color: ${props => props.theme.color.button};
            background-color: ${props => props.theme.color.activeButton};
        }
    }
`;

export const FormError = styled.div`
    height: 20px;
    margin: 0;
    color: ${props => props.theme.color.error};
    font-size: ${fontSize.fontXS};
    
    @media ${device.mobileS} {
        font-size: ${fontSize.fontXXS};
    }
`;