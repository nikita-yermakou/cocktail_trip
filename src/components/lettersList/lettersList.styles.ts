import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../common/styles';

export const LettersContainer = styled.div`
    max-width: 900px;
    margin: 1rem auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`;

export const LinkLetter: any = styled(Link)`
    font-size: ${fontSize.fontL};
    color: ${props => props.theme.color.text};
    margin: 0 .5rem;
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.color.error};
    }

    &:focus {
        color: ${props => props.theme.color.error};
    }
`;






