import React from 'react';
import './roomlist.css';

function RoomDisplay({ room }) {
	if (room.availability) {
		return (
			<span className="grid-item available hovertext" data-hover="Available">
				{room.roomNumber}
			</span>);
	} else {
		return (
			<span className="grid-item occupied hovertext" data-hover="Reserved">
				{room.roomNumber}
			</span>);
	}
}

export default RoomDisplay;
