import React, { useState } from 'react';
import './Jogodavelha.css';

function Jogodavelha() {
  const emptyBoard = Array(9).fill("");  
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPLayer] = useState("O");


  const handleCellClick = (index) => {

    if(board[index] != "") return null;

    setBoard(board.map((item, itemIndex) => itemIndex == index ? currentPlayer : item));


    setCurrentPLayer(currentPlayer == "X" ? "O" : "X")
  }

  const checkWinner{
    
    possibleWaystoWin[
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[6], board[4], board[6]],

    ];

    possibleWaystoWin.forEach
  }




  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className="board">
        {board.map((item, index) => (
          <div 
            key={index}
            className={`cell ${item}`}  
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Jogodavelha;
