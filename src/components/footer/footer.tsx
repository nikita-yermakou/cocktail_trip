import { FooterContainer, FooterText } from "./footer.styles"

const Footer = (props: any) => {
    return(
        <FooterContainer>
            <FooterText>{props.text}</FooterText>
        </FooterContainer>
    )
}

export default Footer;