import { fontFamily, fontSize } from 'components/common/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNavBtn = styled.div`
    height: 50px;
`;

export const HeaderSignBtn = styled.div`
    height: 40px;
`;

export const LogoBtnLink = styled(NavLink)`
    text-decoration: none;
`;

export const TitleContainer = styled.div`
    width: 240px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const TitleIcon = styled.img`
    height: 60px;
`;

export const TitleText = styled.h3`
    font-family: ${fontFamily.UnbReg};
    font-size: ${fontSize.fontL};
    font-style: italic;
    color: ${props => props.theme.name === 'dark' ? props.theme.color.error : props.theme.color.titleText};
`;