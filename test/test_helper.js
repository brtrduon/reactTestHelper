import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html');
// this is essentially setting up a fake html document/browser
global.window = global.document.defaultView;
const $ = jquery(global.window);
// the way that we have '$' set up is to tell jquery to only be responsible of 'global.window' rather than trying to reach out to the DOM



// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
    // when we create a provider element, we need to pass in a reference to redux-store
    // (the redux store is being imported from { createStore } )
    // we need to pass in some initial state when using the createStore method
  );

  return $(ReactDOM.findDOMNode(componentInstance));
  // the line directly above this line produces HTML
}


// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
  // we only want to trigger the event on the first element in the array, thus we use 'this[0]'
}
// every instance of jquery that we create will have access to the simulate function




// set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };