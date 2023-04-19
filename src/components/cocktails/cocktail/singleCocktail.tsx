import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { startCocktail } from '../../../redux/slices/cocktailSlice';
import { useAppDispatch, useAppSelector, useRecentlyViewed } from '../../common/hooks';
import { MIngredient } from '../../ingredients/ingredient/ingredient';
import { IngredientLink } from '../../ingredients/ingredient/ingredient.styles';
import Loader from '../../loader/loader';
import { Container, Name, Glass, GlassTitle, ItemsContainer, Title, Description, DescriptionBox, DescriptionTitle, Picture, PictureBox } from './singleCocktail.styles';
import { motion } from 'framer-motion';
import { elementAnimation } from '../../common/animation/animation';
import RecentlyViewed from '../../ingredients/recentlyViewed/recentlyViewed';

const SingleCocktail: React.FC = () => {
    const {id} = useParams();
    const [recentlyViewed, addRecentlyViewed] = useRecentlyViewed([], 'recentlyViewed');

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
                {addRecentlyViewed(item)}
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
                        {Object.keys(item)?.map((key, index: number) => ((key.slice(0, 13) === 'strIngredient' && item[key] != null)) && 
                        <>
                            <IngredientLink to={`/ingredient/${item[key]}`} key={item[key]}>
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ amount: 0.3, once: true }}
                                >
                                    <MIngredient custom={index} variants={elementAnimation} name={item[key]} measure={item[`strMeasure` + key.slice(13)]}/>
                                </motion.div>
                            </IngredientLink>
                        </> )}
                    </ItemsContainer>
                </Container>
            </>
        ))}
        {recentlyViewed && 
            <RecentlyViewed store={recentlyViewed} title='Recently viewed cocktails'/>
        }
        </>
        }  
        </>
    )
}

export default SingleCocktail;