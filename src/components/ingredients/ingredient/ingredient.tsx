import { IngredientProps } from './ingredient.interface';
import { IngredientContainer, IngredientImg, IngredientName } from './ingredient.styles';

const Ingredient = (props: IngredientProps) => {

    return(
        <IngredientContainer>
            <IngredientImg src={`https://thecocktaildb.com/images/ingredients/${props.name}-Medium.png`}/>
            <IngredientName>{props.name}{props.measure && (' - ' + props.measure)}</IngredientName>
        </IngredientContainer>
    )
}

export default Ingredient;