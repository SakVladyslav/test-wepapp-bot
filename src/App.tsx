import React, {useCallback, useState} from 'react';
import {Button, Stack} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigateToSecondPage = useCallback(() => {
        navigate('/second-page');
    }, [navigate]);

    const getDataAboutUser = useCallback(async () => {
        setLoading(true);

        await fetch('https://65e30e7888c4088649f53cc3.mockapi.io/api/v1/bot/test', {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            setLoading(false);
            setUserData(data);
        }).catch(error => {
            setLoading(false);
            setError(error.message);
            throw error;
        });
    }, []);

    return (
        <>
            {loading && (
                <div className="spinner spinner-grow text-primary" role="status"/>
            )}

            {!loading && (
                <div className="container">
                    <h1 className="title">Test app</h1>

                    <div className="button-group">
                        <Stack className="p-2" gap={3}>
                            <Button onClick={getDataAboutUser} variant="primary">Get data about user</Button>
                            <Button onClick={navigateToSecondPage} variant="info">Go to another page</Button>
                            <Button variant="dark">send message to bot</Button>
                        </Stack>
                    </div>

                    {!!userData.length && (
                        <div className="user">
                            User data: {JSON.stringify(userData)}
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                </div>
            )}
        </>)
}

export default App;
