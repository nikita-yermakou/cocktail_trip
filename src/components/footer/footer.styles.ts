import styled from 'styled-components';
import { fontFamily, fontSize } from '../common/styles';

export const FooterContainer = styled.div`
    width: 100px:
    max-height: 50px;
    background-color: ${props => props.theme.color.cardsBg};
    padding: 1rem;
`;

export const FooterText = styled.div`
    max-height: 50px;
    color: ${props => props.theme.color.text};
    font-size: ${fontSize.fontM};
    font-family: ${fontFamily.UnbBold};
`;