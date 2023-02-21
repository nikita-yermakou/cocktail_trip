import styled from 'styled-components';
import { fontSize } from '../common/styles';

export const AboutContainer = styled.div`
    width: 100%;
    padding: 1.5rem 1rem;
`;

export const AboutTitle = styled.h2`
    font-size: ${fontSize.fontXL};
    text-align: center;
    margin: 0;
`;

export const AboutText = styled.p`
    max-width: 900px;
    margin: 1rem auto;
    text-align: justify;
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontM};
`;