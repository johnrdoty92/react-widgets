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
    let tie = this.state.squares.every((elem) => elem !== null);
    let isDisabled;
    let status;
    console.log("Tie: " + tie);
    console.log("Winner: " + winner);
    if (winner) {
      status = winner + " wins!";
      isDisabled = false;
    } else if (tie) {
      status = "It's a tie!";
      isDisabled = false;
    } else {
      status = `It's ${this.state.xIsNext ? "X" : "O"}'s turn!`;
      isDisabled = true;
    }

    return (
      <div className="tic-tac-toe d-flex flex-column justify-content-center m-1">
        <h3 className="text-center">{status}</h3>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
        <button
          disabled={isDisabled}
          className="btn btn-primary mt-1 mb-4"
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
