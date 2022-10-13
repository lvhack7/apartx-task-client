import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


const api = 'http://localhost:5000/api'
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=Astana&units=metric&appid=ffa159b4b91fa748f9bd20336c3b8672`

const Dashboard = () => {
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState()
    const [initialValue, setInitialValue] = useState('<p>This is the initial content of the editor.</p>')
    const editorRef = useRef(null);

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'ffa159b4b91fa748f9bd20336c3b8672',
        lon: '71.4704',
        lat: '51.1605',
        lang: 'ru',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const rawUser = jwtDecode(localStorage.getItem('token'))
            setLogged(true)
            setUser(rawUser)

            axios.get(`${api}/text?email=${rawUser.email}`)
                .then(({ data }) => {
                    if (data.text) {
                        setInitialValue(data.text)
                    }
                })

            axios.request(apiWeather,)
        }
    }, [])

    const log = async () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent()
            axios.post(api + '/text', {
                text: content,
                email: user.email
            }).then(({ data }) => {
                alert(data.message)
            }).catch(e => {
                alert("Вышла ошибка")
            })
        }
    }

    return (
        <Container className='p-5'>
            <div className='row mt-3'>
                <div className='col-8'>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={initialValue}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <Button variant="contained" color="success" className='mt-3 float-end' onClick={log}>Сохранить</Button>
                </div>
                <div className='col-4'>
                    <ReactWeather
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang="en"
                        locationLabel="Астана"
                        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                        showForecast
                    />
                    {/* <Card className='p-3'>
                        <p className='lead mb-5' style={{ fontSize: '2rem' }}>Погода: Астана</p>
                        <div className='d-flex'>
                            <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' width={60} height={60} />
                            <h3 className='text-primary ms-3'>16 °C</h3>
                        </div>
                    </Card> */}
                </div>
            </div>
        </Container>
    )
}

export default Dashboard