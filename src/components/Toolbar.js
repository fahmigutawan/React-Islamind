import { Button, InputBase, Paper, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import './../App.css'
import { Search } from "@mui/icons-material";

export const Toolbar = () => {
    return (
        <div>
            <Paper
                component={'form'}
                className=" my-[16px] mx-[32px] m-[2px] px-[16px] py-[9px] w-fit"
            >
                <Search />
                <InputBase
                    className="w-fit"
                    placeholder="Search"
                />
            </Paper>
            <div className='w-full flex justify-between items-center py-[16px] px-[32px]'>
                <h1 className='text-[20px] font-bold'>Postingan Anda</h1>
                <NavLink to={'/buat-postingan'}>
                    <btn className="islamind-btn">
                        Buat Postingan
                    </btn>
                </NavLink>
            </div>
        </div>
    )
}
