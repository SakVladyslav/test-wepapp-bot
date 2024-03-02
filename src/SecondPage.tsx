import {Button} from "react-bootstrap";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate();

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