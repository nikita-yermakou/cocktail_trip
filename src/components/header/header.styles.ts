import React from 'react';
import styled from 'styled-components';
import { device } from '../common/breakpoints';
import { fontSize, fontFamily } from '../common/styles';
import '../../index.css';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.color.cardsBg};
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontL};
    font-family: ${fontFamily.JosefinSansRegular};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
`;

export const TitleContainer = styled.div`
    width: 240px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const TitleIcon = styled.img`
    width: 60px;
    height: 60px;
`;

export const TitleText = styled.h3`
    font-family: ${fontFamily.UnbBold};
    font-size: ${fontSize.fontL};
`;

export const NavigationContainer = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

export const SignContainer = styled.div`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const RightContainer = styled.div`
    gap: 2rem;
    display: flex;
    justify-content: center;
`;
