import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;
    // component will be initialized as undefined before the 'beforeEach' function kicks in

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
    // the reason why we do this is because we run a new instance of 'commentbox' before each block
    // then we run the expectation with the new instance of 'commentbox'

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        // we can create a nested describe function to show that two 'it' blocks are similarly related
        // in this case, the two tests check text
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});