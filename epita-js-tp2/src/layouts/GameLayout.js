import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
	width: 650,
	height: `calc(90%)`,
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: "auto"
};

class GameLayout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cells: Array(9).fill(""),
			player1: "P1",
			player2: "P2",
			currentPlayer: "P1",
			won: false,
		};
		this.handleCellClick = this.handleCellClick.bind(this);
	}



	// getDerivedStateFromProps is called before every render,
	// use it to infer new state values from props or state changes.
	static getDerivedStateFromProps(props, state) {
		const cells = state.cells;
		let winner;
		if (cells[0] === cells[1] && cells[1] === cells[2])
			winner = cells[0];
		else if (cells[3] === cells[4] && cells[4] === cells[5])
			winner = cells[3];
		else if (cells[6] === cells[7] && cells[7] === cells[8])
			winner = cells[6];
		else if (cells[0] === cells[3] && cells[3] === cells[6])
			winner = cells[0];
		else if (cells[1] === cells[4] && cells[4] === cells[7])
			winner = cells[1];
		else if (cells[2] === cells[5] && cells[5] === cells[8])
			winner = cells[2];
		else if (cells[0] === cells[4] && cells[4] === cells[8])
			winner = cells[0];
		else if (cells[6] === cells[4] && cells[4] === cells[2])
			winner = cells[6];
		else
			winner = "";
		if (winner === "")
			return null;
		return {won: true};
	}

	handleCellClick(index) {
		if (this.state.cells[index] === "") {
			const cells = this.state.cells.slice();
			let sign;
			if (this.state.currentPlayer === this.state.player1)
				sign = "X";
			else
				sign = "O";
			cells[index] = sign;
			let next;
			if(this.state.currentPlayer === this.state.player1) 
				next = this.state.player2; 
			else if (this.state.currentPlayer === this.state.player2)
				next = this.state.player1;
			this.setState({cells: cells, currentPlayer: next});
		}    
	}

	render() {

		const player = this.state.currentPlayer;
		const cells = this.state.cells;
		const won = this.state.won;

		return (
			<div>
			<GameInfo currentPlayer={player} gameState={won}/>
			<div
			style={gameLayoutStyle}
			>
			<Board cells={cells} onClick={this.handleCellClick} />
			</div>
			</div>
		);
	}
}

export default GameLayout;
