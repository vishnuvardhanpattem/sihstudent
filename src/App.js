
import './App.css';
import Main from './components/Main';
import Profile from './components/Profile';
import Profile1 from './components/Profile1';
import Projects from './components/Projects';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <Main />
        </div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
