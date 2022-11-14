import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
// import Editor from './components/Editor';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Login />}path="/"/>
        <Route element={<Login />}path="login"/>
        <Route element={<Signup/>}path="signup"/>
        {/* <Route element={<Editor/>}path="editor"/> */}
        
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;