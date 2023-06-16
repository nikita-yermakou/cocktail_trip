import styled from 'styled-components';
import { fontSize } from '../../common/styles';
import { device } from 'components/common/breakpoints';

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;

    @media ${device.mobileL} {
        flex-direction: column;
    }
`;

export const PictureBox = styled.div`
    max-width: 300px;
    max-height: 300px;

    @media ${device.tabletS} {
        max-width: 250px;
        max-height: 250px;
    }

    @media ${device.mobileL} {
        max-width: 400px;
        max-height: 400px;
        overflow: hidden;
    }
`;

export const DescriptionBox = styled.div`
    width: 100%;
`;

export const Name = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: center;
`;

export const Picture = styled.img`
    width: 100%;
    height: auto;
`;

export const DescriptionTitle = styled.h2`
    font-size: ${fontSize.fontM};
    text-align: left;
`;

export const Description = styled.p`
    font-size: ${fontSize.fontS};
    text-align: justify;
`;

export const GlassTitle = styled.h2`
    font-size: ${fontSize.fontM};
    text-align: left;
`;

export const Glass = styled.p`
    font-size: ${fontSize.fontS};
    text-align: justify;
`;

export const Title = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: center;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    gap: 1rem;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        justify-content: center;
    }
`;

export const TypeTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: left;
`;

export const Type = styled.p`
    font-size: ${fontSize.fontM};
    text-align: justify;
`;