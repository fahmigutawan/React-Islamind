import Quill from "quill/quill";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ic_islamind_green from './../asset/images/ic_islamind_green.png'
import toast from "react-hot-toast";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LihatPostingan = () => {
    //BAD PRACTICE
    const token = localStorage.getItem('token') ?? ''
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(document.location.search)

    //REAL FROM HERE
    const [desc, setDesc] = useState('<div/>')
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get(`https://devel0-filkom.ub.ac.id/post/${searchParams.get('id')}`)
            .then(res => {
                console.log(res.data)
                setDesc(res.data.data.content)
                setTitle(res.data.data.title)
            })
    }, [])

    useEffect(() => {
        console.log(title)
    }, [title])

    return (
        <div className='h-screen'>
            <div className='flex justify-between items-center px-[32px] py-[16px]'>
                <div className='flex items-center gap-8'>
                    <img className='h-[60px]' src={ic_islamind_green} alt='' />
                    < p className='text-[15px] text-[#B0B0B0] font-bold'>Detail Postingan</p>
                </div>
            </div>
            <div className='flex h-full flex-col p-[32px] gap-8'>
                <p className="text-[25px]">{title}</p>

                <iframe title="desc" srcDoc={desc} height={1000}></iframe>
            </div>
        </div>
    )
}
