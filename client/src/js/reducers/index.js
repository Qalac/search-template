import {SET_QUERY} from '../constants/action-types';

const initialState = {
    query: 0
}

const rootReducer = (initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                query: query + 1
            }
        default:
            return state;
    }
}

export default rootReducer;
