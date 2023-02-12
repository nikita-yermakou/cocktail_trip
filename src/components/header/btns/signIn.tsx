import { HeaderSignBtn } from "./btns.styles";
import { NavLink } from "react-router-dom";
import { LeftSignBtn } from "../../common/buttons";

const SignIn = (props: any) => {
    return(
        <HeaderSignBtn>
            <NavLink to={props.to}>
                <LeftSignBtn>
                    {props.text}
                </LeftSignBtn>
            </NavLink>
        </HeaderSignBtn>
    )
}

export default SignIn;