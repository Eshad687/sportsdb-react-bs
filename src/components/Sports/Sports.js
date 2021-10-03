import React from 'react';
import AllTeams from '../AllTeams/AllTeams';
import Menubar from '../Menubar/Menubar';
import './Sports.css'

const Sports = () => {
    return (
        <div>
            <div className="menu">
                <Menubar></Menubar>
            </div>

            <AllTeams></AllTeams>
        </div>
    );
};

export default Sports;