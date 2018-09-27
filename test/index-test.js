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
