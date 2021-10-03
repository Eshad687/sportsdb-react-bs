import React from 'react';
import './NotFound.css'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const clickHandler = () => {
        history.push("/home");
    }
    return (
        <div className="text-center">
            <img width="400px" src="https://previews.123rf.com/images/monuttanit/monuttanit1805/monuttanit180500043/102209916-404-error-page-not-found-with-white-background-design-template-for-website-background-graphic.jpg" alt="" />
            <br />
            <Button onClick={clickHandler} variant="danger">Home</Button>
        </div>
    );
};

export default NotFound;