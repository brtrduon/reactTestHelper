import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';
// in the line directly above this line, we don't have to put '/index.js' since the file is specifically called 'index'

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('new comment');
            // assuming that the comment  we want to be saved is being passed as an argument to 'saveComment'
            expect(action.payload).to.equal('new comment');
        });
    });
});