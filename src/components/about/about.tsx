import { AboutProps } from "./about.interface";
import { AboutContainer, AboutText, AboutTitle } from "./about.styles";
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const About = forwardRef((props: AboutProps, ref: any) => {
    return(
        <AboutContainer ref={ref}>
            <AboutTitle>{props.title}</AboutTitle>
            <AboutText>{props.text}</AboutText>
        </AboutContainer>
    )
})

export const MAbout = motion(About);
export default About;