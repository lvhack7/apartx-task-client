import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const api = 'http://localhost:5000/api'

function Reg() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpass, setCPass] = useState('')

    const checkPass = () => {
        return cpass === password
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (checkPass) {
            axios.post(api + '/sign-up', { email, password })
                .then(({ data }) => {
                    localStorage.setItem('token', data.token)
                    history.push('/home')
                    window.location.reload()
                }).catch(e => {
                    alert(e.response.data.message)
                })
        } else {
            alert('Пароли не совподают')
        }
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
                <h3 className='text-center mb-4'>Регистрация</h3>
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
                    className='mb-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <TextField
                    type="password"
                    id="filled-basic"
                    label="Подтвердить пароль"
                    variant="outlined"
                    fullWidth
                    className='mb-5'
                    value={cpass}
                    onChange={(e) => setCPass(e.target.value)} />
                <Button variant="contained" fullWidth onClick={onSubmit}>Создать аккаунт</Button>
            </Box>
        </Container>
        // <Container
        //     className="d-flex justify-content-center align-items-center"
        //     style={{ height: window.innerHeight - 54 }} onSubmit={onSubmit}>
        //     <Card style={{ width: 600 }} className="p-5">
        //         <h4 className="m-auto mb-3">Создать в аккаунт</h4>
        //         <Form className="d-flex flex-column">
        //             <Form.Control
        //                 className="mt-3"
        //                 placeholder="Введите ваш email..."
        //                 value={email}
        //                 onChange={e => setEmail(e.target.value)}
        //                 required
        //             />
        //             <Form.Control
        //                 className="mt-3"
        //                 placeholder="Введите ваш пароль..."
        //                 type="password"
        //                 value={password}
        //                 onChange={e => setPassword(e.target.value)}
        //                 required
        //             />
        //             <Form.Control
        //                 className="mt-3 mb-3"
        //                 placeholder="Подтвердите пароль..."
        //                 type="password"
        //                 value={cpass}
        //                 onChange={e => setCPass(e.target.value)}
        //                 required
        //             />
        //             <Button type='submit' variant={'primary'}
        //                 className="align-self-end">
        //                 Регистрироватся
        //             </Button>
        //         </Form>
        //     </Card>
        // </Container>
    )
}

export default Reg