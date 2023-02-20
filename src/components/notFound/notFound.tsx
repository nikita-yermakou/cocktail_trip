import { LinkToHomePage, NotFoundContainer, NotFoundText } from "./notFound.styled"

const NotFound = (props: any) => {
    return(
        <NotFoundContainer>
            <NotFoundText>{props.text} <LinkToHomePage to={props.to}>{props.link}</LinkToHomePage></NotFoundText>
        </NotFoundContainer>
    )
}

export default NotFound;