import styled from 'styled-components';

export const VideoContainer = styled.div`
    width: 100%;
    height: calc(100vh - 55px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const VideoItem = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
`;