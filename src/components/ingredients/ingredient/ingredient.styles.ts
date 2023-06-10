import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../../common/styles';

export const IngredientContainer = styled.div`
    padding-top: 1rem;
    width: 300px;
    min-height: 400px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
    padding-bottom: .2rem;
    color: ${props => props.theme.color.text};

    &:hover {
        color: ${props => props.theme.color.error};
    }
`;

export const IngredientImg = styled.img`
    witdh: 300px;
    height: 300px;
    object-fit: cover;
`;

export const IngredientName = styled.h3`
    font-size: ${fontSize.fontL};
    text-align: center;
    margin: .4rem;
`;

export const Measure = styled.p`
    font-size: ${fontSize.fontM};
    text-align: justify;
`;

export const IngredientLink = styled(Link)`
    text-decoration: none;
`;