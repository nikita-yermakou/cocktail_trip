import { motion } from "framer-motion";
import { RVContainer, RVLink, RVTitle, RVWrap } from "./recentlyViewed.styles";
import { elementAnimation } from "../../common/animation/animation";
import { MRVItem } from "./singleRecentlyViewed";

const RecentlyViewed = (props: any) => {

    return(
        <RVWrap>
            <RVTitle>{props.title}</RVTitle>
            <RVContainer>
                {props.store.slice(-10).map((cocktail: any, index: number) => (
                    <RVLink key={cocktail.idDrink} to={`/cocktail/${cocktail.idDrink}`}
                    >
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.3, once: true }}
                        >
                            <MRVItem custom={index} variants={elementAnimation} name={cocktail.strDrink} id={cocktail.idDrink} img={cocktail.strDrinkThumb}/>
                        </motion.div>
                    </RVLink>
                ))}
            </RVContainer>
        </RVWrap>
    )
}

export default RecentlyViewed;