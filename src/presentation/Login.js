import {NavLink, useNavigate} from "react-router-dom";
import ic_landscape from './../asset/images/ic_landscape.png'
import ic_islamind from './../asset/images/ic_islamind.png'
import {Button, Checkbox, FormControlLabel, Link, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import _ from "lodash";
import { AuthRepo } from "../repo/AuthRepo";

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [ingatSaya, setIngatSaya] = useState()

    useEffect(() => {
        if(!_.isEmpty(localStorage.getItem('token'))) {
            navigate('/home')
        }
    }, [])
    const login = async () => {
        if (_.isEmpty(email)) {
            return toast.error('Masukkan email yang benar')
        }

        if (_.isEmpty(password)) {
            return toast.error('Masukkan password yang benar')
        }

        try {
            const res = await AuthRepo.login(email, password)

            if (ingatSaya) {
                AuthRepo.setLocalToken(res.data?.data?.token)
            } else {
                AuthRepo.setSessionToken(res.data?.data?.token)
            }
            navigate('/home')
            return toast.success('Berhasil')
        } catch (err) {
            return toast.error('Error while logging in')
        }
    }

    return (
        <div className="h-screen bg-white flex justify-center items-center content-center">
            <div className='flex content-center items-center shadow-black shadow-sm rounded-lg w-[900px]'>
                <div className='rounded-l-lg bg-[#1CA094] w-1/2 h-[450px]'>
                    <div className='flex flex-col items-center content-center h-full justify-end'>
                        <img src={ic_islamind} className='w-[108px] pb-[16px]'/>
                        <img src={ic_landscape} alt={''} className='w-full'/>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center px-[16px] gap-[8px]'>
                    <h2 className='w-full text-[20px] font-bold text-center pb-[32px]'>Masuk Sebagai Admin Islamind</h2>

                    <div>
                        <p>Email</p>
                        <TextField value={email} onChange={s => {
                            setEmail(s.target.value)
                        }} className='w-full' id="outlined-basic" variant="outlined"/>
                    </div>

                    <div>
                        <p>Password</p>
                        <TextField value={password} onChange={s => {
                            setPassword(s.target.value)
                        }} type='password' className='w-full' id="outlined-basic" variant="outlined"/>
                    </div>

                    <div className='w-full flex justify-between items-center'>
                        <FormControlLabel
                            control={<Checkbox />}
                            label={'Ingat Saya'}
                            onChange={(_, checked) => { setIngatSaya(checked) }}
                            checked={ ingatSaya }
                        />
                        <Link className='cursor-pointer'>Lupa kata sandi?</Link>
                    </div>

                    <Button variant='contained' className='w-full' onClick={() => {
                        login()
                    }}>
                        MASUK
                    </Button>
                </div>
            </div>
        </div>
    )
}
