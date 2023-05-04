import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';
import { SighBtn } from 'components/common/buttons';

export const FormContainer = styled.div`
    font-family: ${fontFamily.JosefinReg};
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.cardsBg};
    text-align: center;
    margin: 3rem auto;
    width: 400px;
    height: 480px;
    padding: 2rem;
`;

export const FormTitle = styled.h2`
    font-size: ${fontSize.fontXL};
`;

export const FormFieldContainer = styled.div`
    font-size: ${fontSize.fontL};
    border-radius: 20px;
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    margin-bottom: .6rem;
    text-align: left;
`;

export const FormField = styled.input`
    border-radius: 15px;
    width: 100%;
    height: 60px;
    font-size: ${fontSize.fontM};
`;

export const FormRedirect = styled.p`
    font-size: ${fontSize.fontM};
    margin: .7rem 0;
`;

export const FormLink = styled(Link)`
    width: 100%;
`;

export const SendBtn = styled(SighBtn)`
    border-radius: 15px;
    width: 100%;
    font-size: ${fontSize.fontL};
    margin: 1.5rem 0 1rem;
    font-family: ${fontFamily.JosefinReg};
`;

export const FormError = styled.div`
    height: 20px;
    margin: 0;
    color: ${props => props.theme.color.error};
`;