import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/About/AboutPage';
import SignInPage from './Pages/SignIn/SignInPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div>
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/sign-in' Component={SignInPage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
