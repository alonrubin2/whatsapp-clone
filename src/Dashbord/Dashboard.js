import React from 'react';
import './Dashbord.scss';
import Sidebar from './Sidebar/Sidebar'

const Dashboard = ({ id }) => {

    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar id={id}/>
        </div>
    );
}

export default Dashboard;
