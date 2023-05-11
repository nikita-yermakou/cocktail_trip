import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/header';
import { LightTheme, DarkTheme } from './components/common/styles';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import ThemeContext from './components/header/switcher/context';
import HomePage from './pages/HomePage';
import SingleCocktailPage from './pages/SingleCocktailPage';
import { AppContainer } from './App.styles';
import SingleIngredientPage from './pages/SIngleIngredientPage';
import CocktailsPage from './pages/CocktailsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotfoundPage';
import Footer from './components/footer/footer';
import { useLocalStorage } from './components/common/hooks';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  const [theme, setTheme] = useLocalStorage(DarkTheme, 'theme');
  const switcherTheme = () => {
    theme.name === LightTheme.name ? setTheme(DarkTheme) : setTheme(LightTheme);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={
        <>
          <Header title='COCKTAIL TRIP'/>
          <Footer text='Cocktail trip, 2023'/>
        </>
      }>
        <Route path='/' element={<HomePage/>} />
        <Route path='/cocktails/:letter' element={<CocktailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cocktail/:id' element={<SingleCocktailPage/>} />
        <Route path='/ingredient/:name' element={<SingleIngredientPage/>} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    )
  );

  return (
    <ThemeContext.Provider value={{theme: theme, switcher: switcherTheme}}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
