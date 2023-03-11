const Square = () =>{
  return (
    <button> </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player ${player}`;
  function renderSquare(i){
    return <Square> </Square>;
  }
  return (
    <div className="game-board">
        <div className="grid-row">{renderSquare(0)}</div>
        <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
  
  // ==============================
  //    onClick={(e) => {
   //     setPlayer(player ? 0:1);
  //      status = `Player ${player}`;
  //      e.target.style.background = "green";
  //      e.target.style.width = 600;
  //    }}
  //  >

 // );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
