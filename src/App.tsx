import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { LightTheme, DarkTheme } from './components/common/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './components/header/switcher/context';
import Cocktails from './components/cocktails/Cocktails';
import { useAppDispatch, useAppSelector } from './components/common/hooks';
import { startRandomCocktails } from './redux/slices/randomCocktailsSlice';
import { startPopCocktails } from './redux/slices/popCocktailsSlice';
import HomePage from './pages/HomePage';
import SingleCocktailPage from './pages/SingleCocktailPage';
import { AppContainer } from './App.styles';

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const switcherTheme = () => {
    theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  }

  return (
    <ThemeContext.Provider value={{theme: theme, switcher: switcherTheme}}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header title='COCKTAIL TRIP'/>}>
                <Route path='/' element={<HomePage/>} />
                <Route path='/cocktails' element={<div></div>} />
                <Route path='/ingredients' element={<div></div>} />
                <Route path='/about' element={<div></div>} />
                <Route path='/cocktail/:id' element={<SingleCocktailPage/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
