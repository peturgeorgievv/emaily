import { FETCH_SURVEYS, DELETE_SURVEYS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        case DELETE_SURVEYS:
            state = state.filter(survey => survey._id !== action.payload._id);
            return state;
        default:
            return state;
    }
}