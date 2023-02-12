import React, { useContext } from 'react';
import { LightTheme } from '../../common/styles';

const ThemeContext = React.createContext<any>('');

export const useTheme = () => {
    return useContext(ThemeContext);
}


export default ThemeContext;