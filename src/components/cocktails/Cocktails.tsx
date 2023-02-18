import { CocktailsContainer, CocktailsTitle, CocktailsWrap } from './cocktails.styles';
import Cocktail from './cocktail';
import { Link } from 'react-router-dom';

const Cocktails = (props: any) => {

    return(
        <CocktailsWrap>
            <CocktailsTitle>{props.title}</CocktailsTitle>
            <CocktailsContainer>
                {console.log('drinks', props.store.drinks)}
                {props.store.drinks?.map((cocktail: any) => (
                    <Link key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}>
                        <Cocktail name={cocktail.strDrink} id={cocktail.idDrink} img={cocktail.strDrinkThumb}/>
                    </Link>
                ))}
            </CocktailsContainer>
        </CocktailsWrap>
    )
}

export default Cocktails;

