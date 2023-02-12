import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { LightTheme, DarkTheme } from './components/common/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './components/header/switcher/context';

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const switcherTheme = () => {
    theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  }
  
  return (
    <ThemeContext.Provider value={{theme: theme, switcher: switcherTheme}}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Header title='COCKTAIL TRIP'/>}>
              <Route path='/cocktails' element={<Header title='COCKTAIL TRIP'/>} />
              <Route path='/ingredients' element={<Header title='COCKTAIL TRIP'/>} />
              <Route path='/about' element={<Header title='COCKTAIL TRIP'/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
