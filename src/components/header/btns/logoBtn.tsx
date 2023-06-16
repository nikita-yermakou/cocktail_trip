import { LogoBtnLink, TitleContainer, TitleIcon, TitleText } from './btns.styles';
import { LogoBtnProps } from './btns.interface';

const LogoBtn = (props: LogoBtnProps) => {
    return(
        <LogoBtnLink to={props.to}>
            <TitleContainer>
                <TitleIcon src={props.img}/>
                <TitleText>{props.title}</TitleText>
            </TitleContainer>
        </LogoBtnLink>
    )
}

export default LogoBtn;