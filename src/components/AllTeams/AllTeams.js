import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button, Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const AllTeams = () => {

    const [teams, setTeams] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, [searchText])

    const searchHandler = (event) => {
        setSearchText(event.target.value)
    }
    return (
        <Container className="mt-5 text-center">
            <h1>Search the Teams</h1>
            <InputGroup className="mb-3 w-50 mx-auto py-3">
                <FormControl onChange={searchHandler}
                    placeholder="Search Teams"

                />
                <Button variant="outline-danger">
                    Search
                </Button>
            </InputGroup>
            <Row xs={1} md={3} className="g-4">
                {
                    teams.map(team => <Team
                        key={team.idTeam}
                        team={team}
                    > </Team>)
                }
            </Row>

            {

            }
        </Container>
    );
};

export default AllTeams;