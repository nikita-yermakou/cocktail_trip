import styled from 'styled-components';

export const AppContainer = styled.div<{burgerState: boolean}>`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.text};
    overflow-x: hidden;
    overflow-y: ${props => props.burgerState ? 'hidden' : 'visible'};
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

