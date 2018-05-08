import { INCREMENT, DECREMENT } from '../actionTypes';

export function incrementActionCreator() {
    return {
        type: INCREMENT,
    }
}

export function decrementActionCreator() {
    return {
        type: DECREMENT,
    }
}