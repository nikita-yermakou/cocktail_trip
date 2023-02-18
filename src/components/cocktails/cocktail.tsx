import React from 'react';
import { CocktailContainer, CocktailImg, Name } from './cocktails.styles';

const Cocktail = (props: any) => {

    return(
        <CocktailContainer>
            <CocktailImg src={props.img}/>
            <Name>{props.name}</Name>
        </CocktailContainer>
    )
}

export default Cocktail;