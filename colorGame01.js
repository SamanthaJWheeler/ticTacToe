const Square = ({id, player, newState}) => {
  const [color, setColor] = React.useState('green');
  const palet = ["red", "blue", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  
  React.useEffect(()=> {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting square ${id}`);
  });
  //keeping track of state of square

  return (
    <button 
      onClick={(e) => {
        let col = getRandomColor(); //need to use below
        setColor(col);
        newState({id:id, color:color});
        e.target.style.background = col;
      }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState([]);
  //set total game state
  let status = `Player ${player}`;

  const newState = (obj)=>{
    setState([...state, obj]);
    console.log(`adding state ${JSON.stringify(obj)}`);
  }

  function renderSquare(i){
    return <Square id={i} player={player} newState={newState}> </Square>;
  }
  return (
    <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div id="info">
          <button>Show/Hide Row</button>
          <button>Re-render</button>
        <h1>Turn of palyer {player}</h1>
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
