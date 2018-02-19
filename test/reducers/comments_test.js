import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        // expect(commentReducer()).to.be.instanceof(Array);
        expect(commentReducer(undefined, {})).to.eql([]);
        // note: undefined is NOT the same as null
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' }
        // whenever we handle a reducer test, we create the action ahead of time and then pass it into the reducer with some default state
        // we expect that whatever gets returned from the reducer is the expected state
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
});