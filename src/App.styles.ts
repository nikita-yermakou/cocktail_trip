import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.text};
    overflow-x: hidden;
`;