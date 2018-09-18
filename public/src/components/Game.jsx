import React, { Component } from 'react';
import SketchLogin from './Login';
import SketchLogo from './SketchLogo';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import JoinGame from './JoinGame';
import CanvasDraw from './DrawCanvas';
import Chat from './ChatComponent';

const boxBorder = {
	border: '1px solid black',
	margin: '0px',
	padding: '0px'
}

export default class Index extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		//whenever the page first loads
	}

	render() {
		return (
			<div className='container'>
				<SketchLogo />
				<div className="row">
					<div className="col-2" style={boxBorder}>
						Game Lobby user stuff here
					</div>

					<div className="col-7" style={boxBorder}>
						<CanvasDraw />
					</div>
					<div className="col-3" style={boxBorder}>
						<Chat />
					</div>
				</div>
			</div>
		);
	}
}