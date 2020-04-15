import React from 'react';
import Routes from './routes'
import  Navbar from './components/navbar';
import { useSelector} from "react-redux";


function App() {
  const isAuth = useSelector((state) => state.navbar.isAuth);
  return (
    <div>
      <Navbar isAuth={isAuth}/>
      <Routes/>
    </div>
  );
}

export default App;
