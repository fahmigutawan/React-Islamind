import { AuthRepo } from "../repo/AuthRepo";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
    const token = AuthRepo.getToken()
    return (<>{token ? <Outlet /> : <Navigate to={'/login'} />}</>)
}