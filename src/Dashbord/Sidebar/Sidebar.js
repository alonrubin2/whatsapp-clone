import React from 'react';
import './Sidebar.scss';

const Sidebar = ({ id }) => {
    return (
        <div className="Sidebar">
            <nav>
                <ul> Chats
                    <li><a href="/">conversation 1</a></li>
                    <li><a href="/">conversation 2</a></li>
                    <li><a href="/">conversation 3</a></li>
                </ul>
                <ul> Contacts
                    <li><a href="/">contact 1</a></li>
                    <li><a href="/">contact 2</a></li>
                    <li><a href="/">contact 3</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
