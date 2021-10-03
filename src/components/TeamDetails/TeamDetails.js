import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Menubar from '../Menubar/Menubar';
import './TeamDetails.css'
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png'

const TeamDetails = () => {
    const [team, setTeam] = useState([]);
    const { teamId } = useParams();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    const { strGender, strTeamBadge, strTeam, strDescriptionEN } = team;
    return (
        <div>
            <div className="menu">
                <Menubar></Menubar>
            </div>
            <div className="text-center p-5">
                {
                    strGender === "Male" ? <img className="w-50" src={maleImage} alt="" /> : <img className="w-50" src={femaleImage} alt=""></img>
                }
            </div>

            <div className="d-flex container mt-5">
                <div className="text-center me-5">
                    <img className="w-50" src={strTeamBadge} alt="" />
                    <h1>{strTeam}</h1>
                </div>

                <div>
                    <p>
                        {strDescriptionEN}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;