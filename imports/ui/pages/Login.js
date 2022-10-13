import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const api = 'http://localhost:5000/api'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async () => {
        axios.post(api + '/sign-in', { email, password })
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
                history.push('/home')
                window.location.reload()
            })
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
                className='p-5 mt-5 shadow rounded'
                style={{ width: '550px' }}
            >
                <h3 className='text-center mb-4'>Войти</h3>
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Почта"
                    variant="outlined"
                    value={email}
                    fullWidth
                    className='mb-3'
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField
                    type="password"
                    id="filled-basic"
                    label="Пароль"
                    variant="outlined"
                    fullWidth
                    className='mb-5'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" fullWidth onClick={onSubmit}>Войти в аккаунт</Button>
            </Box>
        </Container>
        // <Container
        //     className="d-flex justify-content-center align-items-center"
        //     style={{ height: window.innerHeight - 54 }} onSubmit={onSubmit}>
        //     <Card style={{ width: 600 }} className="p-5">
        //         <h4 className="m-auto mb-3">Войти в аккаунт</h4>
        //         <Form className="d-flex flex-column">
        //             <Form.Control
        //                 className="mt-3"
        //                 placeholder="Введите ваш email..."
        //                 value={email}
        //                 onChange={e => setEmail(e.target.value)}
        //             />
        //             <Form.Control
        //                 className="mt-3 mb-3"
        //                 placeholder="Введите ваш пароль..."
        //                 type="password"
        //                 value={password}
        //                 onChange={e => setPassword(e.target.value)}
        //             />
        //             <Button type='submit' variant={'primary'}
        //                 className="align-self-end">
        //                 Войти
        //             </Button>
        //         </Form>
        //     </Card>
        // </Container>
    )
}

export default Login