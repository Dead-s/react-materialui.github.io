import { TableContainer, TableBody, TableHead, TableCell, TableRow, Table, Paper, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";

function Table_component() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    const [fetchedData, setFetchedData] = useState([]);
    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    useEffect(() => {
        fetch(apiURL).then(res => res.json())
            .then(resdata => {
                setFetchedData(resdata);
            });
    }, []);

    function handleChangePage(event: any, newpage: any) {
        console.log(event);
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event: any) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ height: '100%' }}>
                <Table sx={{ height: '100%' }} size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: 'black',
                                border: '1px solid black',
                                color: 'white',
                                padding: '5px',
                                "& th": {
                                    color: 'whitesmoke',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    border: '1px solid white'
                                }
                            }}>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">userid</TableCell>
                            <TableCell align="right">title</TableCell>
                            <TableCell align="right">body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ border: '1px solid black' }}>

                        {
                            fetchedData != undefined && fetchedData.slice(pg * rpg, pg * rpg + rpg).map(function (data: any) {
                                return (

                                    <TableRow
                                        key={data.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                    >
                                        <TableCell align="center">{data.id}</TableCell>
                                        <TableCell align="center">{data.userId}</TableCell>
                                        <TableCell align="center">{data.title}</TableCell>
                                        <TableCell align="center">{data.body}</TableCell>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={fetchedData.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}
export default Table_component;