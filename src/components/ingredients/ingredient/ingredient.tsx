import { IngredientProps } from './ingredient.interface';
import { IngredientContainer, IngredientImg, IngredientName } from './ingredient.styles';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Ingredient = forwardRef((props: IngredientProps, ref: any) => {

    return(
        <IngredientContainer
            ref={ref}
        >
            <IngredientImg src={`https://thecocktaildb.com/images/ingredients/${props.name}-Medium.png`}/>
            <IngredientName>{props.name}{props.measure && (' - ' + props.measure)}</IngredientName>
        </IngredientContainer>
    )
})

export const MIngredient = motion(Ingredient);