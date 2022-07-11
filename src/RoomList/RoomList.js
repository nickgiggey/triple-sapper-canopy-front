import React from 'react';
import { useState } from 'react';
import '../Utilities/reset.css';
import './roomlist.css';
import RoomDisplay from './RoomDisplay';

function RoomList(props) {
    const roomArray = [];
    for (let i = 1; i < 31; i++) {
        roomArray.push({ roomNumber: i, availability: false });
    }
    const [rooms, setRooms] = useState(roomArray);
    return (
        <div className="home-container2">
            <div className="grid-container">
                {rooms.map((room, index) => {
                    return <RoomDisplay room={room} key={index} />;
                })}
            </div>
        </div>
    );
}

export default RoomList;