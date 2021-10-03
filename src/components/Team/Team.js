import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeamBadge, strTeam, strLeague, strCountry, idTeam } = props.team;
    return (
        <Col>
            <Card>
                <Card.Img className="w-50 mx-auto my-2" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>

                    <small>{strCountry}</small>
                    <h6>League: {strLeague}</h6>
                    <Link to={`/team/${idTeam}`}>
                        <Button variant="success">
                            Details
                        </Button>
                    </Link>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default Team;