import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import Ingredient from '../../ingredients/ingredient/ingredient';
import { Container, Name, Glass, GlassTitle, ItemsContainer, Title, Description, DescriptionBox, DescriptionTitle, Picture, PictureBox, TypeTitle, Type } from '../../cocktails/cocktail/singleCocktail.styles';
import { startIngredient } from '../../../redux/slices/ingredientSlice';
import { startCocktailsByIngredient } from '../../../redux/slices/cocktailsByIngredientSlice';
import Cocktail from '../../cocktails/cocktail';

const SingleIngredient = () => {
    const {name} = useParams();

    const dispatch = useAppDispatch();

    console.log('name', name);

    useEffect(() => {
        dispatch(startIngredient(`search.php?i=${name}`));
        dispatch(startCocktailsByIngredient(`filter.php?i=${name}`));
    }, []);

    const ingredient = useAppSelector((state: any) => state.ingredient.ingredient);
    const cocktailsByIngredient = useAppSelector((state: any) => state.cocktailsByIngredient.cocktailsByIngredient).drinks;

    console.log('ingredient', ingredient);
    console.log('cocktailsByIngredient', cocktailsByIngredient);

    return(
        <>
        {ingredient?.map((item: any) => (
            <>  
                {console.log(item)}
                <Name>{item.strIngredient}</Name>
                <Container>
                    <PictureBox>
                        <Picture src={`https://thecocktaildb.com/images/ingredients/${item.strIngredient}-Medium.png`}/>
                    </PictureBox>
                    <DescriptionBox>
                        <DescriptionTitle>Description</DescriptionTitle>
                        <Description>{item.strDescription}</Description>
                        <TypeTitle>Type</TypeTitle>
                        <Type>{item.strType}</Type>
                    </DescriptionBox>
                </Container>
                <Title>Cocktails</Title>
                <Container>
                    <ItemsContainer>
                        {cocktailsByIngredient?.map((item: any) => (
                        <>
                            <Link to={`/cocktail/${item.idDrink}`} key={item.idDrink}>
                                <Cocktail name={item.strDrink} id={item.idDrink} img={item.strDrinkThumb}/>
                            </Link>
                        </> ))}
                    </ItemsContainer>
                </Container>
            </>
        ))}
        </>
    )
}

export default SingleIngredient;