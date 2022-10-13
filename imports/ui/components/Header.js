import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';
import history from '../history';
import jwtDecode from "jwt-decode";


function Header() {
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const decode = jwtDecode(localStorage.getItem('token'))
            setUser(decode)
            setLogged(true)
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
        window.location.reload()
    }

    return (
        <Navbar bg="light" className='shadow-sm'>
            <Container className='px-3 py-2'>
                <Navbar.Brand href="#home">
                    <img
                        src="https://www.apartx.app/images/logo/dark/logo_full.webp"
                        width="150"
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => history.push('/home')}>Главная</Nav.Link>
                </Nav>
                {
                    logged ?
                        <Form>
                            <Button variant="contained" onClick={() => history.push('/dashboard')} className='me-3'>Панель управления</Button>
                            <Button variant="outlined" color="error" onClick={logOut}>Выйти</Button>
                        </Form>
                        :
                        <Form className="d-flex">
                            <Button variant="outlined" className='me-3' onClick={() => history.push('/login')}>Войти</Button>
                            <Button variant="contained" onClick={() => history.push('/register')}>Регистрация</Button>
                        </Form>
                }
            </Container>
        </Navbar>
    )
}

export default Header