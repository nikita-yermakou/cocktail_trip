import { HeaderSignBtn } from "./btns.styles";
import { NavLink } from "react-router-dom";
import { LeftSignBtn } from "../../common/buttons";
import { BtnProps } from "./btns.interface";

const SignIn = (props: BtnProps) => {
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