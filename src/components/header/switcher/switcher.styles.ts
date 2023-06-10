import styled from 'styled-components';

export const SwitcherBox = styled.div`
    position: relative;
    width: 62px;
    height: 36px;
    border-radius: 18px;
    cursor: pointer;
    background-color: ${props => props.theme.color.switcher};
    transition: .4s;
`;

export const SwitcherBall = styled.div`
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.text};
    color: ${props => props.theme.color.button};
    top: 4px;
    left: ${props => props.theme.name === 'light' ? '4px' : '30px'};
    transition: .4s;
    padding: 2px 0 0 2px;
    overflow: hidden;
`;