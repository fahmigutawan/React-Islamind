import {Toolbar} from "../components/Toolbar";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    Button,
    ButtonGroup,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import toast from "react-hot-toast";

export const Home = () => {
    //BAD CASE
    const token = localStorage.getItem('token') ?? ''

    //REAL CASE
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState({
        current_page: 1,
        max_page: 1,
        next_page: null,
        prev_page: null
    })

    const handleLihat = (item) => {
        toast.error('Fitur ini belum tersedia')
    }

    const handleEdit = (item) => {
        toast.error('Fitur ini belum tersedia')
    }

    const handleRemove = (item) => {
        toast.error('Fitur ini belum tersedia')
    }

    useEffect(() => {
        axios.get(`https://devel0-filkom.ub.ac.id/post-admin?page=${page}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setList(res.data?.data?.posts)
                setPagination({
                    current_page: res.data?.data?.current_page,
                    max_page: res.data?.data?.max_page,
                    next_page: res.data?.data?.next_page,
                    prev_page: res.data?.data?.prev_page
                })
            })
    }, [])

    const fetchNextPage = () => {
        axios.get(`https://devel0-filkom.ub.ac.id/post-admin?page=${page + 1}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setList(res.data?.data?.posts)
                setPagination({
                    current_page: res.data?.data?.current_page,
                    max_page: res.data?.data?.max_page,
                    next_page: res.data?.data?.next_page,
                    prev_page: res.data?.data?.prev_page
                })
            })
    }

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'rgba(28, 160, 148, 0.15)',
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.white,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (<div className=' h-screen'>
        <Toolbar/>
        <InfiniteScroll
            className='p-[32px]'
            dataLength={list.length}
            hasMore={pagination.next_page !== null}
            loader={<h4>Loading...</h4>}
            next={fetchNextPage}
        >
            <TableContainer className='rounded-2xl' component={Paper}>
                <Table sx={{minWidth: 350}} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                <p className=''>Judul</p>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <p>Isi</p>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <p>Kategori</p>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <p>Aksi</p>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row) => {
                            return <StyledTableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell align="left">
                                    <p className='mx-[16px] line-clamp-3'>{row.title}</p>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div className='mx-[16px] line-clamp-3' dangerouslySetInnerHTML={{__html: row.content}}/>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className='flex gap-[8px] justify-center'>
                                        {
                                            row.postTags.map((s) => {
                                                return <div
                                                    key={s.tagId}
                                                    className='p-[8px] bg-[rgba(28, 160, 148, 0.15)] rounded-2xl'>{s.tagId}</div>
                                            })
                                        }
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{
                                    <ButtonGroup
                                        disableElevation
                                        variant="contained"
                                        aria-label="Disabled elevation buttons"
                                    >
                                        <Button onClick={() => {handleLihat(row)}}>Lihat</Button>
                                        <Button onClick={() => {handleEdit(row)}}>Edit</Button>
                                        <Button onClick={() => {handleRemove(row)}}>Hapus</Button>
                                    </ButtonGroup>
                                }</StyledTableCell>
                            </StyledTableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </InfiniteScroll>
    </div>)
}
