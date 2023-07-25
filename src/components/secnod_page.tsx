import { Route, Routes } from "react-router-dom";
import Form from "./page_one";
import { Grid } from "@mui/material";
import List_component from "./layouts/list";
import Table_component from "./layouts/table_component";
import Logout_btn from "./layouts/logout_btn";
function Second_page() {

    // if (!authorized.authorized) {
    if (!localStorage.getItem('auth')) {
        return (
            <Routes>
                <Route path='/' element={<Form />} />
            </Routes>
        )
    }
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Logout_btn />
            <Grid container justifyContent={"center"} alignItems={"center"} sx={{ width: '100%', height: '100%' }}>
                <Grid item sx={{ width: '90%', height: '40%' }}>
                    <Table_component />
                </Grid>
                <Grid item sx={{ width: '90%', height: '30vh', marginTop: '50px', color: 'black' }}>
                    <List_component />
                </Grid>
            </Grid>

        </div >
    )
}

export default Second_page

