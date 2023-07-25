import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function Logout_btn() {
    let navigate = useNavigate();

    function logout() {
        localStorage.removeItem('auth');
        toast.info('Logged out', { position: toast.POSITION.TOP_CENTER, autoClose: 1000, theme: 'dark' });
        setTimeout(() => {
            navigate('/');
        }, 1500);
    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <IconButton aria-label='logout' size="large"
                sx={{ position: 'relative', width: '100%', top: '25px', height: '50px', }}
                onClick={logout}>
                <LogoutIcon fontSize="large" sx={{ position: 'absolute', right: '50px' }} />
            </IconButton>
        </>
    )
}

export default Logout_btn;
