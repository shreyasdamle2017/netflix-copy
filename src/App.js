import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/About/AboutPage';
import SignInPage from './Pages/SignIn/SignInPage';

function App() {
  return (
    <div className='app-container'>
      <NavbarComponent />
      <div className='page-container'>
        <Routes>
        <Route exact path='/' element={<Navigate to='sign-in' />} />
          <Route path='/home' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/sign-in' Component={SignInPage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
