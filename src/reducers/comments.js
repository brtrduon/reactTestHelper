import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
        return [ ...state, action.payload ];
        // the line directly above this line is equivalent to writing:
        // return [state.concat([action.payload])];
    }
    return state;
}