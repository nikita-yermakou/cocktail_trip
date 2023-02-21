import { CocktailLink, CocktailsContainer, CocktailsTitle, CocktailsWrap } from './cocktails.styles';
import Cocktail from './cocktail';
import { CocktailsProps } from './cocktails.interface';

const Cocktails = (props: any) => {

    return(
        <CocktailsWrap>
            <CocktailsTitle>{props.title}</CocktailsTitle>
            <CocktailsContainer>
                {props.store.drinks?.map((cocktail: any) => (
                    <CocktailLink key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
                        <Cocktail name={cocktail.strDrink} id={cocktail.idDrink} img={cocktail.strDrinkThumb}/>
                    </CocktailLink>
                ))}
            </CocktailsContainer>
        </CocktailsWrap>
    )
}

export default Cocktails;

