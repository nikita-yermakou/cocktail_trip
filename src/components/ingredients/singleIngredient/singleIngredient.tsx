import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { Container, Name, ItemsContainer, Title, Description, DescriptionBox, DescriptionTitle, Picture, PictureBox, TypeTitle, Type } from '../../cocktails/cocktail/singleCocktail.styles';
import { startIngredient } from '../../../redux/slices/ingredientSlice';
import { startCocktailsByIngredient } from '../../../redux/slices/cocktailsByIngredientSlice';
import Cocktail from '../../cocktails/cocktail';
import { CocktailLink } from '../../cocktails/cocktails.styles';
import Loader from '../../loader/loader';

const SingleIngredient: React.FC = () => {
    const {name} = useParams();

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(startIngredient(`search.php?i=${name}`));
        dispatch(startCocktailsByIngredient(`filter.php?i=${name}`));
    }, []);

    const ingredient = useAppSelector((state) => state.ingredient.ingredient);
    const cocktailsByIngredient = useAppSelector((state: any) => state.cocktailsByIngredient.cocktailsByIngredient).drinks;
    const loading = useAppSelector((state) => state.ingredient.isLoading);

    return(
        <>
        {loading ? 
        <Loader /> :
        <>
            {ingredient?.map((item: any) => (
            <>  
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
                            <CocktailLink to={`/cocktail/${item.idDrink}`} key={item.idDrink}>
                                <Cocktail name={item.strDrink} id={item.idDrink} img={item.strDrinkThumb}/>
                            </CocktailLink>
                        </> ))}
                    </ItemsContainer>
                </Container>
            </>
        ))}
        </>
        }
        </>
    )
}

export default SingleIngredient;