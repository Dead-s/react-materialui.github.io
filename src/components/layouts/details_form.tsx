import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Detailsform() {
    let navigate = useNavigate();

    type formValues = {
        name: string,
        email: string,
        phoneno: number
    };

    const form = useForm<formValues>({
        defaultValues: {
            name: '',
            email: '',
            phoneno: 0
        },
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;


    function OnSubmit(data: formValues) {
        console.log(data);
        var user = {
            'name': data.name,
            'mail': data.email,
            'phoneno': data.phoneno
        }
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('auth', "logged");
        toast.info('Redirecting...', { position: toast.POSITION.TOP_CENTER, autoClose: 1500, theme: 'dark' });

        setTimeout(() => {
            navigate('/react-materialui.github.io/second_page/*');
        }, 1600);
    }

    return (
        <form id='form-details' autoComplete='off' onSubmit={handleSubmit(OnSubmit)} >
            <Grid container flexDirection={'column'} justifyContent={'center'} alignItems={'center'} spacing={3} borderRadius={2} padding={5} boxShadow={5}
                sx={{ padding: '25px 0px' }}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h5'>
                        Details
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField type='text' label="Name *" variant="outlined" margin='dense'
                        {...register("name", { required: "Valid Name required", pattern: /^[a-zA-Z]*$/i })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </Grid>
                <Grid item xs={12}>

                    <TextField type='email' label="Mail *" variant="outlined"
                        {...register("email", { required: "Valid Mail required", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField type='number' label="Phone No *" variant="outlined"
                        {...register("phoneno", { required: "Valid Phone no required", pattern: /^[0-9]{10}$/i })}
                        error={!!errors.phoneno}
                        helperText={errors.phoneno?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant='contained'>Proceed</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Detailsform;