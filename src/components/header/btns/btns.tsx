import { HeaderNavBtn } from './btns.styles';
import { NavLink } from 'react-router-dom';
import { NavBtn } from '../../common/buttons';

const NavButton = (props: any) => {
    return(
        <HeaderNavBtn>
            <NavLink to={props.to}>
                <NavBtn>{props.text}</NavBtn>
            </NavLink>
        </HeaderNavBtn>
    )
}

export default NavButton;

