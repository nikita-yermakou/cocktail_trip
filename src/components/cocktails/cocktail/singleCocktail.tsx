import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { startCocktail } from '../../../redux/slices/cocktailSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { CocktailContainer, CocktailName, IngredientsContainer, IngredientsTitle, Instruction, InstructionBox, InstructionTitle, Picture, PictureBox } from './singleCocktail.styles';

const SingleCocktail = (props: any) => {
    const {id} = useParams();
    console.log('props', id);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startCocktail(`lookup.php?i=${id}`));
    }, []);

    const cocktail = useAppSelector((state: any) => state.cocktail.cocktail);
    const data = cocktail.drinks;
    console.log('data', data)

    return(
        <>
        {data.map((item: any) => (
            <>
                <CocktailContainer>
                    <PictureBox>
                        <CocktailName></CocktailName>
                        <Picture img={}/>
                    </PictureBox>
                    <InstructionBox>
                        <InstructionTitle></InstructionTitle>
                        <Instruction></Instruction>
                    </InstructionBox>
                </CocktailContainer>
                <CocktailContainer>
                    <IngredientsTitle></IngredientsTitle>
                    <IngredientsContainer>
                        {props.store.drinks?.map((cocktail: any) => (
                        <Link key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
                            <Cocktail name={cocktail.strDrink} id={cocktail.idDrink} img={cocktail.strDrinkThumb}/>
                        </Link>
                        ))}
                    </IngredientsContainer>
                </CocktailContainer>
            </>
        ))}
        </>
    )
}

export default SingleCocktail;