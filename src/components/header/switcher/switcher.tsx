import React, { useContext } from 'react';
import { SwitcherImg } from "./switcher.styles";
import { Img } from '../../common/styles';
import { useTheme } from './context';

const Switcher = () => {
    const currentContext = useTheme();

    return(
        <SwitcherImg onClick={currentContext.switcher} src={currentContext.theme.name === 'light' ? Img.IconMoon : Img.IconSun}/>
    )
}

export default Switcher;