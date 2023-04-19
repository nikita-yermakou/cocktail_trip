import { CocktailLink, CocktailsContainer, CocktailsTitle, CocktailsWrap } from './cocktails.styles';
import { MCocktail } from './cocktail';
import { CocktailsProps } from './cocktails.interface';
import { motion } from 'framer-motion';
import { elementAnimation } from '../common/animation/animation';
import { useRecentlyViewed } from '../common/hooks';

const Cocktails = (props: any) => {
    
    return(
        <CocktailsWrap>
            <CocktailsTitle>{props.title}</CocktailsTitle>
            <CocktailsContainer>
                {props.store.drinks?.map((cocktail: any, index: number) => (
                    <CocktailLink key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}
                    >
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.3, once: true }}
                        >
                            <MCocktail custom={index} variants={elementAnimation} name={cocktail.strDrink} id={cocktail.idDrink} img={cocktail.strDrinkThumb}/>
                        </motion.div>
                    </CocktailLink>
                ))}
            </CocktailsContainer>
        </CocktailsWrap>
    )
}

export default Cocktails;

