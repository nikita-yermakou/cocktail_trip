import { HeaderSignBtn } from "./btns.styles";
import { NavLink } from "react-router-dom";
import { RightSignBtn } from "../../common/buttons";
import { BtnProps } from "./btns.interface";

const SignUp = (props: BtnProps) => {
    return(
        <HeaderSignBtn>
            <NavLink to={props.to}>
                <RightSignBtn>
                    {props.text}
                </RightSignBtn>
            </NavLink>
        </HeaderSignBtn>
    )
}

export default SignUp;