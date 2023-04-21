import React, { forwardRef } from 'react';
import { CocktailProps } from './cocktails.interface';
import { CocktailContainer, CocktailImg, Name } from './cocktails.styles';
import { motion } from 'framer-motion';

const Cocktail = forwardRef((props: CocktailProps, ref: any) => {

    return(
        <CocktailContainer
            ref={ref}
        >
            <CocktailImg src={props.img}/>
            <Name>{props.name}</Name>
        </CocktailContainer>
    )
})

export const MCocktail = motion(Cocktail);