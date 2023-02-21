import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../common/styles';

export const NotFoundContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotFoundText = styled.h2`
    margin: 0;
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontXL};
`;

export const LinkToHomePage = styled(Link)`
    margin: 0;
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontXL};
`;