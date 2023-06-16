import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from 'components/common/breakpoints';
import styled from 'styled-components';

export const SwitcherBox = styled.div`
    position: relative;
    width: 45px;
    height: 28px;
    border-radius: 14px;
    cursor: pointer;
    background-color: ${props => props.theme.color.switcher};
    transition: .4s;

    @media ${device.tabletL} {
        position: absolute;
        top: 14px;
        right: 23px;
        display: block;
    }

    @media ${device.mobileS} {
        right: 1px;
        margin-right: 16px;
    }
`;

export const SwitcherBall = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.text};
    color: ${props => props.theme.color.button};
    top: 3px;
    left: ${props => props.theme.name === 'light' ? '3px' : '20px'};
    transition: .4s;
    overflow: hidden;
`;

export const StyledSwitcherIcon = styled(FontAwesomeIcon)`
    height: 20px;
    width: 20px;
`;