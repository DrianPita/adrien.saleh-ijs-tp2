import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyleHover = {
  display: "block",
  backgroundColor: "#b3e5fc",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStyle: cellStyle
		}
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}

	onMouseOver(e) {
		this.setState({currentStyle: cellStyleHover})
	}

	onMouseOut(e) {
		this.setState({currentStyle: cellStyle})
	}

	render() {
		const style = this.state.currentStyle;
		return (
			<div id={this.props.id} style={style} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={() => this.props.onClick()}>{this.props.value} </div>
		);
	}
}

export default Cell;
