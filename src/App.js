import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { BuatPostingan } from "./presentation/buat-post/BuatPostingan";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from './route/PrivateRoute';
import { Checker } from './presentation/Checker';
import { LihatPostingan } from './presentation/LihatPostingan';
import { Login } from './presentation/Login';
import { Home } from './presentation/home/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/login'} element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path={'/'} element={<Checker />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/buat-postingan'} element={<BuatPostingan />} />
                    <Route path={'/lihat'} element={<LihatPostingan />} />
                </Route>
            </Routes>

            <Toaster />
        </div>
    );
}

export default App;
