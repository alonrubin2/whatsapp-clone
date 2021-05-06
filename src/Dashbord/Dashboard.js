import React from 'react';
import './Dashbord.scss';
import Sidebar from './Sidebar/Sidebar'

const Dashboard = ({ id }) => {

    return (
        <div className="Dashboard">
            <Sidebar id={id}/>
        </div>
    );
}

export default Dashboard;
