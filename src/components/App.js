import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import Header from './Header';


class Scoreboard extends Component {



  getSelectedPlayer = () => {
    let selectedIndex = this.props.selectedPlayerIndex;
    if (selectedIndex < 0 || selectedIndex > this.props.players.length - 1) {
      return {};
    }
    return this.props.players[selectedIndex];
  }

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
};

export default connect(mapStateToProps)(Scoreboard);