import styled from 'styled-components';
import { fontSize } from '../../common/styles';

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
`;

export const PictureBox = styled.div`
    width: 400px;
`;

export const DescriptionBox = styled.div`
    width: 100%;
`;

export const Name = styled.h2`
    font-size: ${fontSize.fontXL};
    text-align: center;
`;

export const Picture = styled.img`
    witdh: 400px;
    height: 400px;
    object-fit: cover;
`;

export const DescriptionTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: left;
`;

export const Description = styled.p`
    font-size: ${fontSize.fontM};
    text-align: justify;
`;

export const GlassTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: left;
`;

export const Glass = styled.p`
    font-size: ${fontSize.fontM};
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
`;

export const TypeTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: left;
`;

export const Type = styled.p`
    font-size: ${fontSize.fontM};
    text-align: justify;
`;