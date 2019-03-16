import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import actions from './actions';
import { Game } from './components';
import * as selectors from './selectors';

export class Container extends Component {

    render() {
        return (
            <Game {...this.props}/>
        );

    }
}

const mapStateToProps = createStructuredSelector({
    mode: selectors.getMode,
    player1: selectors.getPlayerOneInfo,
    player2: selectors.getPlayerTwoInfo,
    winner: selectors.getWinner,
    timestamp: selectors.getTimestamp,
    waitingNewChallenger: selectors.getWaitingNewChallenger,
    isConnected: selectors.getIsConnected,
    currentId: selectors.getCurrentId,
    isComplete: selectors.getIsComplete,
    isPlaying: selectors.getIsPlaying
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => dispatch(actions.changeMode()),
        restart: () => dispatch(actions.restart()),
        setPlayerOne : (weapon, loading) => dispatch(actions.setPlayerOne(weapon, loading)),
        setPlayerTwo : (weapon, loading) => dispatch(actions.setPlayerTwo(weapon, loading)),
        setScoreWinner : (winner) => dispatch(actions.setScoreWinner(winner)),
        reset : () =>  dispatch(actions.reset()),
        setTimestamp : (timestamp) =>  dispatch(actions.setTimestamp(timestamp)),
        setCurrentPlayer : (id) =>  dispatch(actions.setCurrentPlayer(id)),
        setLoadingPlayerOne : (loading) =>  dispatch(actions.setLoadingPlayerOne(loading)),
        setIsPlaying : (playing) =>  dispatch(actions.setIsPlaying(playing)) 
    };
};

Container.propTypes = {
    /** Product info */
    data: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);