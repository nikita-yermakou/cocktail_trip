import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { startCocktail } from '../../../redux/slices/cocktailSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import Ingredient from '../../ingredients/ingredient/ingredient';
import { IngredientLink } from '../../ingredients/ingredient/ingredient.styles';
import Loader from '../../loader/loader';
import { Container, Name, Glass, GlassTitle, ItemsContainer, Title, Description, DescriptionBox, DescriptionTitle, Picture, PictureBox } from './singleCocktail.styles';

const SingleCocktail: React.FC = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startCocktail(`lookup.php?i=${id}`));
    }, []);

    const cocktail = useAppSelector((state: any) => state.cocktail.cocktail).drinks;
    const loading = useAppSelector((state) => state.cocktail.isLoading);

    return(
        <>
        {loading ? 
        <Loader /> :
        <>
            {cocktail?.map((item: any) => (
            <>  
                <Name>{item.strDrink}</Name>
                <Container>
                    <PictureBox>
                        <Picture src={item.strDrinkThumb}/>
                    </PictureBox>
                    <DescriptionBox>
                        <DescriptionTitle>Recipe</DescriptionTitle>
                        <Description>{item.strInstructions}</Description>
                        <GlassTitle>Preferred glass</GlassTitle>
                        <Glass>{item.strGlass}</Glass>
                    </DescriptionBox>
                </Container>
                <Title>Ingredients</Title>
                <Container>
                    <ItemsContainer>
                        {Object.keys(item)?.map((key) => ((key.slice(0, 13) === 'strIngredient' && item[key] != null)) && 
                        <>
                            <IngredientLink to={`/ingredient/${item[key]}`} key={item[key]}>
                                <Ingredient name={item[key]} measure={item[`strMeasure` + key.slice(13)]}/>
                            </IngredientLink>
                        </> )}
                    </ItemsContainer>
                </Container>
            </>
        ))}
        </>
        }
        
        </>
    )
}

export default SingleCocktail;