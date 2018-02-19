import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    })

    it('shows a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });
    // Here, we are simply checking if the parent div is displaying a child div
    
    it('shows a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });
});

// the format above is a core part of how Mocha runs tests
// i.e. when Mocha first executes, the tests are not immediately ran.
// Mocha first takes record of the functions that we declared and passes them into the 'describe' and 'it' blocks to queue these tests up to  run in the future
// the reason why Mocha does this is to safely execute the code, which can potentially throw A LOT of errors, which can lead the program/app to crash