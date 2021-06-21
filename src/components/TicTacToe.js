import React, { Component } from "react";

function Square(props) {
  return (
    <button className="board__square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  render() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const squares = nums.map((i) => {
      return (
        <Square
          key={i}
          onClick={() => this.props.onClick(i)}
          value={this.props.squares[i]}
        />
      );
    });
    return <div className="board">{squares}</div>;
  }
}

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(i) {
    if (!this.state.squares[i] && !determineWinner(this.state.squares)) {
      const squares = this.state.squares.slice();
      const xIsNext = !this.state.xIsNext;
      squares[i] = this.state.xIsNext ? "X" : "O";

      this.setState({
        squares: squares,
        xIsNext: xIsNext,
      });
      console.log(this.state.xIsNext, i);
    }
  }

  handleReset() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }
  render() {
    let winner = determineWinner(this.state.squares);
    let status;
    if (winner) {
      status = winner + " wins!";
    } else {
      status = `It's ${this.state.xIsNext ? "X" : "O"}'s turn!`;
    }

    return (
      <div className="tic-tac-toe m-1">
        <div>{status}</div>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
        <button
          disabled={winner === null}
          className="btn btn-primary"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
}

function determineWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
