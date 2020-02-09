import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {configureStore, history} from '@nrwl-saga-redux-starter/data';
import App from './app/app';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>,
MOUNT_NODE,
);
