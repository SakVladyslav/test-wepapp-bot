import {Button} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const tg = window.Telegram.WebApp;

const SecondPage = () => {
    const navigate = useNavigate();
    const [subject, setSubject] = useState('physical');

    const onSendData = useCallback(() => {
        const data = {
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [subject]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'DATA TEST'
        });
        tg.MainButton.show();
    }, []);

    const navigateToHome = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Second page <span className="badge badge-secondary">New</span></h1>
            <Button onClick={navigateToHome} variant="primary">Go to home</Button>
        </div>

    )
};

export default SecondPage;