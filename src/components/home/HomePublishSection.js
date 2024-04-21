import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import InfiniteScroll from "react-infinite-scroll-component"
import { StyledTableCell, StyledTableRow } from "../../presentation/home-post/HomePost"
import { AksiButtonSection } from "./AksiButtonSection"
import _ from "lodash"

export function HomePublishSection({
    list = [],
    tags = [],
    endOfPagination,
    onFetchNextPage
}) {
    return (
        <InfiniteScroll
            dataLength={list.length}
            hasMore={endOfPagination == false}
            loader={<h4>Loading...</h4>}
            next={() => { onFetchNextPage() }}
        >
            <TableContainer className='rounded-2xl' component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="a dense table">
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
                        {_.map(list, (row) => {
                            const tagIds = _.map(
                                row.postTags ?? [],
                                (s) => {
                                    return s.tagId
                                }
                            )

                            let tagsSelected = []

                            _.forEach(
                                tagIds,
                                (s) => {
                                    const tmp = _.findLast(tags, (o) => {
                                        return o.id === s
                                    })
                                    tagsSelected.push(tmp)
                                }
                            )

                            console.log(tagsSelected)

                            return <StyledTableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell align="left">
                                    <p className='mx-[16px] line-clamp-3'>{row.title}</p>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div className='mx-[16px] line-clamp-3' dangerouslySetInnerHTML={{ __html: row.content }} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className='flex flex-col gap-[8px] justify-start items-start'>
                                        {
                                            tagsSelected.map((s) => {
                                                return <div
                                                    key={s.id}
                                                    className='px-[8px] py-[2px] bg-opacity-[0.15] bg-[#1CA094] text-hijau rounded-2xl'>{s.name}</div>
                                            })
                                        }
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{
                                    <AksiButtonSection />
                                }</StyledTableCell>
                            </StyledTableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </InfiniteScroll>
    )
}