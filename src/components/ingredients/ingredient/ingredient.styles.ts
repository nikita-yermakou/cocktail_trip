import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../../common/styles';
import { device } from 'components/common/breakpoints';

export const IngredientContainer = styled.div`
    padding-top: 1rem;
    max-width: 200px;
    min-height: 280px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
    padding-bottom: .2rem;
    color: ${props => props.theme.color.text};

    @media ${device.tabletS} {
        max-width: 148px;
        min-height: 228px;
    }

    @media ${device.mobileS} {
        max-width: 200px;
        min-height: 275px;
        width: 200px;
        height: 275px;
    }

    &:hover {
        color: ${props => props.theme.color.error};
    }
`;

export const IngredientImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const IngredientName = styled.h3`
    font-size: ${fontSize.fontS};
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