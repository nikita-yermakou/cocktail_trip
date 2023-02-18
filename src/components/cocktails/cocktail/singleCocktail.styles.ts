import styled from 'styled-components';
import { fontSize } from '../../common/styles';

export const CocktailContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const PictureBox = styled.div`
    width: 400px;
    text-align: center;
`;

export const InstructionBox = styled.div`
`;

export const CocktailName = styled.h2`
    font-size: ${fontSize.fontL};
`;

export const Picture = styled.img`
    witdh: 400px;
    height: 400px;
    object-fit: cover;
`;

export const InstructionTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: center;
`;

export const Instruction = styled.p`
    font-size: ${fontSize.fontS};
    text-align: justify;
`;

export const IngredientsBox = styled.div`
    width: 100%:
    padding: 1rem;
    text-align: center;
`;

export const IngredientsTitle = styled.h2`
    font-size: ${fontSize.fontL};
    text-align: center;
`;

export const IngredientsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const IngredientContainer = styled.div`
    width: 300px;
    background-color: ${props => props.theme.color.cardsBg};
    cursor: pointer;
`;

export const IngredientImg = styled.img`
    witdh: 300px;
    height: 300px;
    object-fit: cover;
`;

export const IngredientName = styled.h3`
    font-size: ${fontSize.fontM};
`;