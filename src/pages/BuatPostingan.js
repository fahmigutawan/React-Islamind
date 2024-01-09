import Quill from "quill/quill";
import ReactQuill from "react-quill";
import {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import ic_islamind_green from './../asset/images/ic_islamind_green.png'
import toast from "react-hot-toast";
import _ from "lodash";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const BuatPostingan = () => {
    //BAD PRACTICE
    const token = localStorage.getItem('token') ?? ''
    const navigate = useNavigate()

    //REAL FROM HERE
    const [text, setText] = useState('')
    const [kategori, setKategori] = useState('')
    const [title, setTitle] = useState('')
    const handleKategoriChange = (event) => {
        setKategori(event.target.value);
    };

    const handleTerbitkan = async () => {
        if(_.isEmpty(title)){
            return toast.error('Judul harus dimasukkan')
        }

        if(_.isEmpty(kategori)){
            return toast.error('Kategori harus dipilih')
        }

        if(_.isEmpty(text)){
            return toast.error('Isi dari postingan harus diisi')
        }

        try{
            await axios.post('https://devel0-filkom.ub.ac.id/post-admin', {
                    title: title,
                    content: text
                }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success('Berhasil')
            navigate('/home')
        }catch (err) {
            return toast.error('Error while updating data')
        }
    }

    return (
        <div className='h-screen'>
            <div className='flex justify-between items-center px-[32px] py-[16px]'>
                <div className='flex items-center gap-8'>
                    <img className='h-[60px]' src={ic_islamind_green} alt=''/>
                    < p className='text-[15px] text-[#B0B0B0] font-bold'>Draft di Islamind</p>
                </div>
                <div className='flex'>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel>Kategori</InputLabel>
                        <Select
                            value={kategori}
                            label="Kategori"
                            onChange={handleKategoriChange}
                        >
                            <MenuItem value={'Fatwa'}>Fatwa</MenuItem>
                            <MenuItem value={'Hadits'}>Hadits</MenuItem>
                            <MenuItem value={'Qiyas'}>Qiyas</MenuItem>
                            <MenuItem value={'Ijma'}>Ijma</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' size='small' onClick={() => {handleTerbitkan()}}>
                        Terbitkan
                    </Button>
                </div>
            </div>
            <div className='flex h-full flex-col p-[32px] gap-8'>
                <TextField className='w-full' label='Title' value={title} onChange={(s) => {setTitle(s.target.value)}}/>
                <ReactQuill className='min-h-[512px]' value={text} onChange={(s) => {
                    setText(s)
                }}/>
            </div>
        </div>
    )
}
