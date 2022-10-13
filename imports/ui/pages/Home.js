import React, { useState, useRef, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

const api = 'http://localhost:5000/api'

function Home() {
    return (
        <Container className='mt-5 mb-5'>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-center text-primary">
                    ApartX
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">ApartX - платформа для автоматизации процесса аренды недвижимости. ApartX это простой и быстрый в использовании сервис аренды как для арендодателей, так и для арендаторов.</p>
                </div>
                <div className="overflow-hidden">
                    <div className="container px-5">
                        <img src="https://www.apartx.app/images/landing/header-devices.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home