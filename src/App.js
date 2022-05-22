import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>

    <Footer></Footer>
    </>
  );
}

export default App;
