import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    players: [
        {
            name: 'Jim Hoskins',
            score: 1,
            created: Date.now(),
            updated: null
        },
        {
            name: 'Andrew Chalkley',
            score: 0,
            created: Date.now(),
            updated: null
        },
        {
            name: 'Alena Holligan',
            score: 2,
            created: Date.now(),
            updated: null
        },
        {
            name: 'Megha Thomas',
            score: 0,
            created: Date.now(),
            updated: null
        }
    ],
    selectedPlayerIndex: -1
};

export default function Player(state=initialState, action) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players,
                    {
                        name: action.name,
                        score: 0,
                        created: Date.now()
                    }
                ]
            };

        case PlayerActionTypes.REMOVE_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players.slice(0, action.index),
                    ...state.players.slice(action.index + 1)
                ]
            };

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return {
                ...state,
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            updated: Date.now(),
                            score: player.score + action.score
                        };
                    }
                    return player;
                }),
            };

        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            };

        default:
            return state;
    }
 
 }