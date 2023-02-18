import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';

export const CocktailsWrap = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.text};
    font-family: ${fontFamily.JosefinReg};
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    transition: .3s;
`;

export const CocktailsTitle = styled.h2`
    font-size: ${fontSize.fontL};
`;

export const CocktailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;


export const CocktailContainer = styled.div`
    width: 300px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
`;

export const CocktailImg = styled.img`
    witdh: 300px;
    height: 300px;
    object-fit: cover;
`;

export const Name = styled.h3`
    font-size: ${fontSize.fontM};
`;

export const Id = styled.p`
    font-size: ${fontSize.fontS};
`;

