import { elementAnimation } from "components/common/animation/animation";
import { MAbout } from "../components/about/about";
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {

    return(
        <>  
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.3, once: true}}
            >
                <MAbout custom={1} variants={elementAnimation} title='About project' text='This project was created to studies goal, but its not just it. Here you can find mutch interesting recipes for your party, weekend or for everyday) And now prepare yourself to exiting cocktail trip' />
            </motion.div>
        </>
    )
}

export default AboutPage;