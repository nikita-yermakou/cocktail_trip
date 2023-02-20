import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { LightTheme, DarkTheme } from './components/common/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './components/header/switcher/context';
import HomePage from './pages/HomePage';
import SingleCocktailPage from './pages/SingleCocktailPage';
import { AppContainer } from './App.styles';
import SingleIngredientPage from './pages/SIngleIngredientPage';
import CocktailsPage from './pages/CocktailsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotfoundPage';

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
                <Route path='/cocktails/:letter' element={<CocktailsPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/cocktail/:id' element={<SingleCocktailPage/>} />
                <Route path='/ingredient/:name' element={<SingleIngredientPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
