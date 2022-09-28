
import './App.css';
import { Homepage } from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import DictPage from './pages/DictPage/DictPage';
import LoginPage from './pages/LoginPage';
import CreateWordPage from './pages/CreateWordPage';
import SignupPage from './pages/SignupPage';
import UpdateWordPage from './pages/UpdateWordPage';
import UserHomePage from './pages/UserHomePage'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/create_word" element={<CreateWordPage />} />
        <Route path="/sign_up" element={<SignupPage />} />
        <Route path="/user_home" element={<UserHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dict_list" element={<DictPage />} />
        <Route path="/update_word" element={<UpdateWordPage />} />


      </Routes>
    </div>
  );
}

export default App;
