import { NotFoundIF } from "./notFound.interfaces";
import { LinkToHomePage, NotFoundContainer, NotFoundText } from "./notFound.styled";


const NotFound = (props: NotFoundIF) => {
    return(
        <NotFoundContainer>
            <NotFoundText>{props.text} <LinkToHomePage to={props.to}>{props.link}</LinkToHomePage></NotFoundText>
        </NotFoundContainer>
    )
}

export default NotFound;