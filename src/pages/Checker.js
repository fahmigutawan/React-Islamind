import {useEffect} from "react";
import _ from "lodash";
import {useNavigate} from "react-router-dom";

export const Checker = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!_.isEmpty(localStorage.getItem('token'))) {
            navigate('/home')
        }else{
            navigate('/login')
        }
    }, [])

    return <></>
}
