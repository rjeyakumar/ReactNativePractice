import { INCREMENT, DECREMENT } from '../actionTypes';

const initialState = {
    counter: 0,
};
export default function counterReducer(prevState = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { counter: prevState.counter + 1 };
        case DECREMENT:
            return { counter: prevState.counter - 1 };
        default:
            return prevState;
    }
}