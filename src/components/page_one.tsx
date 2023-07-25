import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detailsform from './layouts/details_form';
// import {DevTool} from 'devtool';

export default function Form() {
    return (
        <>
            <ToastContainer></ToastContainer>
            {/* <div> */}
            <Detailsform />
            {/* <DevTool control={control} /> */}
            {/* </div > */}
        </>
    );
}


