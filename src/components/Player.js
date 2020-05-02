import React from 'react';
import Counter from './Counter';

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>✖</a>
        <a className="select-player" onClick={ () => props.selectPlayer(props.index) }>{props.name}</a>
      </div>
      <div className="player-score">
        <Counter 
          index={props.index}
          updatePlayerScore={props.updatePlayerScore}
          score={props.score} />
      </div>
    </div>
  );
}


export default Player;
