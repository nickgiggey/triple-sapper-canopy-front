import React from 'react';
import './roomlist.css';

function RoomDisplay({ code }) {
	if (code.code) {
		return (
			<span className="grid-item available hovertext" data-hover="Available">
				{code.code}
				Hello
			</span>);
	} else {
		return (
			<span className="grid-item occupied hovertext" data-hover="Reserved">
				{code.code}
				Hello2
			</span>);
	}
}

export default RoomDisplay;
