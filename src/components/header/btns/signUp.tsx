import { HeaderSignBtn } from "./btns.styles";
import { NavLink } from "react-router-dom";
import { RightSignBtn } from "../../common/buttons";

const SignUp = (props: any) => {
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