import styled from 'styled-components';
import { fontFamily, fontSize } from '../common/styles';
import { device } from 'components/common/breakpoints';

export const FooterContainer = styled.div`
    width: 100px:
    max-height: 25px;
    background-color: ${props => props.theme.color.cardsBg};
    padding: .8rem;
`;

export const FooterText = styled.div`
    max-height: 25px;
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontXS};
    font-family: ${fontFamily.UnbBold};

    @media ${device.mobileS} {
        font-size: ${fontSize.fontXXS};
    }
`;