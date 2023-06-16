import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize, fontFamily } from '../common/styles';
import { device } from 'components/common/breakpoints';

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
    color: ${props => props.theme.color.titleText};

    @media ${device.mobileL} {
        font-size: ${fontSize.fontM};
    }
`;

export const CocktailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const CocktailContainer = styled.div`
    max-width: 200px;
    min-height: 265px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
    padding-bottom: .3rem;
    color: ${props => props.theme.color.text};

    @media ${device.mobileL} {
        max-width: 148px;
        min-height: 213px;
    }

    @media ${device.mobileS} {
        max-width: 200px;
        width: 200px;
        height: 265px;
    }

    &:hover {
        color: ${props => props.theme.color.error};
    }
`;

export const CocktailImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media ${device.mobileS} {

        width: 200px;
        height: 200px;
    }
`;

export const Name = styled.h3`
    font-size: ${fontSize.fontS};
    margin: .4rem;
    text-align: center;

    @media ${device.mobileL} {
        font-size: ${fontSize.fontS};
    }
`;

export const CocktailLink = styled(Link)`
    text-decoration: none;
`;


