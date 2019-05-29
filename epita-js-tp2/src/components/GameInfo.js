import React from "react";

const gameInfoStyle = {
	textAlign: "center",
	marginBottom: "10px",
};

const GameInfo = ({ gameState = false, currentPlayer = "unkown" }) => (
	<div>
	{gameState === false && <h3>It's your turn {currentPlayer}</h3> }
	{gameState && <h3>{currentPlayer} has won the game !</h3>}
	</div>
);

export default GameInfo;
