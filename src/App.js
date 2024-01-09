import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {BuatPostingan} from "./pages/BuatPostingan";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/buat-postingan'} element={<BuatPostingan/>}/>
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;
