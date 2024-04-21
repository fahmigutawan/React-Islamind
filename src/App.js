import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { BuatPostingan } from "./presentation/buat-post/BuatPostingan";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from './route/PrivateRoute';
import { Checker } from './presentation/Checker';
import { LihatPostingan } from './presentation/LihatPostingan';
import { Login } from './presentation/Login';
import { Home, HomePost } from './presentation/home-post/HomePost';
import { IslamindDrawer } from './components/IslamindDrawer';

function App() {
    const routeShouldNotShowingDrawer = [
        '/',
        '/home-post',
        '/home-book'
    ]
    const showDrawer = routeShouldNotShowingDrawer.includes(useLocation().pathname)
    return (
        <div className='flex'>
            {showDrawer ? <IslamindDrawer /> : <></>}
            <div>
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path={'/'} element={<Checker />} />
                        <Route path={'/home-post'} element={<HomePost />} />
                        <Route path={'/home-book'} element={<>HALLO</>} />
                        <Route path={'/buat-postingan'} element={<BuatPostingan />} />
                        <Route path={'/lihat'} element={<LihatPostingan />} />
                    </Route>
                </Routes>
                <Toaster />
            </div>
        </div>
    );
}

export default App;
