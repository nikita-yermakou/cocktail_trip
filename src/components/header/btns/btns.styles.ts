import { device } from 'components/common/breakpoints';
import { fontFamily, fontSize } from 'components/common/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNavBtn = styled.div`
    height: 30px;
`;

export const HeaderSignBtn = styled.div`
    height: 30px;
`;

export const LogoBtnLink = styled(NavLink)`
    text-decoration: none;
`;

export const TitleContainer = styled.div`
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    @media ${device.tabletL} {
        width: 200px;
        position: absolute;
        top: 7px;
        left: calc(50% - 100px);
    }

    @media ${device.mobileL} {
        width: 60px;
        position: absolute;
        top: 5px;
        left: calc(50% - 30px);
    }
`;

export const TitleIcon = styled.img`
    height: 40px;
`;

export const TitleText = styled.h3`
    font-family: ${fontFamily.UnbReg};
    font-size: ${fontSize.fontM};
    font-style: italic;
    color: ${props => props.theme.name === 'dark' ? props.theme.color.error : props.theme.color.titleText};

    @media ${device.mobileL} {
        display: none;
    }
`;
