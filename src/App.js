import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {BuatPostingan} from "./pages/BuatPostingan";
import {Toaster} from "react-hot-toast";
import {Checker} from "./pages/Checker";
import {LihatPostingan} from "./pages/LihatPostingan";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Checker/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/buat-postingan'} element={<BuatPostingan/>}/>
                <Route path={'/lihat'} element={<LihatPostingan/>}/>
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;
