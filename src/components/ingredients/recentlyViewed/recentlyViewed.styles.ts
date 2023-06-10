import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fontSize, fontFamily } from '../../common/styles';

export const RVWrap = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.text};
    font-family: ${fontFamily.JosefinReg};
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    transition: .3s;
`;

export const RVTitle = styled.h2`
    font-size: ${fontSize.fontXL};
    color: ${props => props.theme.color.titleText};
`;

export const RVContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const RVItemContainer = styled.div`
    width: 200px;
    min-height: 260px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
    padding-bottom: .3rem;
    color: ${props => props.theme.color.text};

    &:hover {
        color: ${props => props.theme.color.error};
    }
`;

export const RVItemImg = styled.img`
    witdh: 200px;
    height: 200px;
    object-fit: cover;
`;

export const RVItemName = styled.h3`
    font-size: ${fontSize.fontM};
    margin: .4rem;
    text-align: center;
`;

export const RVLink = styled(Link)`
    text-decoration: none;
`;


