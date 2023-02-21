import React from 'react';
import { CocktailProps } from './cocktails.interface';
import { CocktailContainer, CocktailImg, Name } from './cocktails.styles';

const Cocktail = (props: CocktailProps) => {

    return(
        <CocktailContainer>
            <CocktailImg src={props.img}/>
            <Name>{props.name}</Name>
        </CocktailContainer>
    )
}

export default Cocktail;