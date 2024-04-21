import { Toolbar } from "../../components/Toolbar";
import {
    Button,
    ButtonGroup,
    Paper,
    styled,
    Tab,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Tabs
} from "@mui/material"
import { PostRepo } from "../../repo/PostRepo";
import { HomeDraftSection } from "../../components/home/HomeDraftSection";
import { useEffect, useState } from "react";
import _ from "lodash";
import { TagRepo } from "../../repo/TagRepo";
import { HomePublishSection } from "../../components/home/HomePublishSection";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(28, 160, 148, 0.15)',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const HomePost = () => {
    const [listDraft, setListDraft] = useState([])
    const [listPublish, setListPublish] = useState([])
    const [paginationDraft, setPaginationDraft] = useState(
        {
            current_page: 1,
            max_page: 1,
            next_page: 1,
            prev_page: 1
        }
    )
    const [paginationPublish, setPaginationPublish] = useState(
        {
            current_page: 1,
            max_page: 1,
            next_page: 1,
            prev_page: 1
        }
    )
    const [tags, setTags] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const contentList = [
        <HomeDraftSection
            list={listDraft}
            tags={tags}
            endOfPagination={paginationDraft.next_page == null}
            onFetchNextPage={() => { fetchNextPage(paginationDraft.next_page) }}
        />,
        <HomePublishSection
            list={listPublish}
            tags={tags}
            endOfPagination={paginationPublish.next_page == null}
            onFetchNextPage={() => { fetchNextPage(paginationPublish.next_page) }}
        />
    ]
    const fetchNextPage = (page) => {
        if (page != null) {
            if (page == 1) {
                setListDraft([])
                setListPublish([])
            }
            PostRepo.getAllPostAdminByPage(page)
                .then(res => {
                    switch (selectedTab) {
                        case 0:
                            setListDraft(s => s.concat(res.data?.data?.posts))
                            break
                        case 1:
                            setListPublish(s => s.concat(res.data?.data?.posts))
                            break
                    }

                    switch (selectedTab) {
                        case 0:
                            setPaginationDraft({
                                current_page: res.data?.data?.current_page,
                                max_page: res.data?.data?.max_page,
                                next_page: res.data?.data?.next_page,
                                prev_page: res.data?.data?.prev_page
                            })
                            break
                        case 1:
                            setPaginationPublish({
                                current_page: res.data?.data?.current_page,
                                max_page: res.data?.data?.max_page,
                                next_page: res.data?.data?.next_page,
                                prev_page: res.data?.data?.prev_page
                            })
                            break
                    }
                })
        }
    }
    const getAllTag = () => {
        TagRepo
            .getAllTag()
            .then(res => {
                setTags(res.data.data)
            })
    }

    useEffect(() => {
        getAllTag()
    }, [])

    useEffect(() => {
        switch (selectedTab) {
            case 0:
                setPaginationDraft(
                    {
                        current_page: 1,
                        max_page: 1,
                        next_page: 1,
                        prev_page: 1
                    }
                )
                break
            case 1:
                setPaginationPublish(
                    {
                        current_page: 1,
                        max_page: 1,
                        next_page: 1,
                        prev_page: 1
                    }
                )
                break
        }

        fetchNextPage(1)
    }, [selectedTab])

    return (
        <div className=' h-screen'>
            <Toolbar />
            <div className='p-[32px]'>
                <Tabs value={selectedTab} onChange={(_, value) => { setSelectedTab(value) }}>
                    <Tab label={'Draft'} value={0} />
                    <Tab label={'Publikasi'} value={1} />
                </Tabs>
                <>{contentList[selectedTab]}</>
            </div>
        </div>
    )
}

