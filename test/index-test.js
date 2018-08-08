import { expect } from 'chai';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import React from 'react';
import UserInput from '../src/components/UserInput';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from '../src/App';
import Users from '../src/components/Users';
import manageUsers from '../src/reducers/manageUsers'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('store', () => {

  let store
  it('is correctly initialized when application is mounted', () => {
      store = createStore(manageUsers)

      const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(store.getState()).to.deep.equal({users: []});
  });

  it('can be updated with an action', () => {
      store = createStore(manageUsers)
      store.dispatch({type: 'ADD_USER', user: {username: "Joey", hometown: "Brooklyn"}})
      const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(store.getState()).to.deep.equal({users: [{username: "Joey", hometown: "Brooklyn"}]});
  });
});

describe('the application', () => {
  let store

  it('does not display any users initially', () => {
    store = createStore(manageUsers)

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(Users).find('li').length).to.equal(0);
  });





});
