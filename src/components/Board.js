import React from "react";
import Square from "./partials/Square";

export default class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square 
                key={"square_" + i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} 
            />
        );
    }

    renderSquares(n) {
        let squares = [];

        for (let i = n; i < n + 3; i++) {
            squares.push(this.renderSquare(i));
        }

        return squares;
    }

    renderRow(i) {
        return (
            <div key={"row_" + i} className="board-row">
                {this.renderSquares(i)}
            </div>
        );
    }

    renderRows(n) {
        let rows = [];

        for (let i = 0; i < n; i++) {
            if (i % 3 === 0) {
                rows.push(this.renderRow(i));
            }
        }

        return rows;
    }

    render() {
        return (
            <div>
                {this.renderRows(9)}
            </div>
        );
    }
}