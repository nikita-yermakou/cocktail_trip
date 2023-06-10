import { HeaderNavBtn } from './btns.styles';
import { NavLink } from 'react-router-dom';
import { NavBtn } from '../../common/buttons';
import { BtnProps } from './btns.interface';

const NavButton = (props: BtnProps) => {
    return(
        <HeaderNavBtn>
            <NavLink to={props.to}>
                <NavBtn>{props.text}</NavBtn>
            </NavLink>
        </HeaderNavBtn>
    )
}

export default NavButton;

