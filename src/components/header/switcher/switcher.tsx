import React from 'react';
import { StyledSwitcherIcon, SwitcherBall, SwitcherBox } from "./switcher.styles";
import { useTheme } from './context';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Switcher: React.FC = () => {
    const currentContext = useTheme();

    return(
        <>
            <SwitcherBox onClick={currentContext.switcher}>
                <SwitcherBall>
                    {currentContext.theme.name === 'light' 
                    ? <StyledSwitcherIcon icon={faMoon} />
                    : <StyledSwitcherIcon icon={faCloudSun} />}
                </SwitcherBall>
            </SwitcherBox>
        </>
    )
}

export default Switcher;