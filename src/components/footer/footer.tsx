import { FooterProps } from "./footer.interface";
import { FooterContainer, FooterText } from "./footer.styles"

const Footer = (props: FooterProps) => {
    return(
        <FooterContainer>
            <FooterText>{props.text}</FooterText>
        </FooterContainer>
    )
}

export default Footer;