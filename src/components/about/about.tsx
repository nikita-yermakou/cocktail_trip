import { AboutContainer, AboutText, AboutTitle } from "./about.styles"

const About = (props: any) => {
    return(
        <AboutContainer>
            <AboutTitle>{props.title}</AboutTitle>
            <AboutText>{props.text}</AboutText>
        </AboutContainer>
    )
}

export default About;