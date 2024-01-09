import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export const Toolbar = () => {
    return (
        <div className='w-full bg-white shadow-sm flex justify-between items-center py-[16px] px-[32px]'>
            <h1 className='text-[20px] font-bold'>Postingan Anda</h1>
            <NavLink to={'/buat-postingan'}>
                <Button variant='contained'>
                    Buat Postingan
                </Button>
            </NavLink>
        </div>
    )
}
