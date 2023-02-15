import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { LightTheme, DarkTheme } from './components/common/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './components/header/switcher/context';
import PopCocktails from './components/popCocktails/popCocktails';

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const switcherTheme = () => {
    theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  }
  
  return (
    <ThemeContext.Provider value={{theme: theme, switcher: switcherTheme}}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header title='COCKTAIL TRIP'/>}>
              <Route path='/' element={<PopCocktails />} />
              <Route path='/cocktails' element={<div></div>} />
              <Route path='/ingredients' element={<div></div>} />
              <Route path='/about' element={<div></div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
