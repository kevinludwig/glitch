import * as React from 'react';
import * as ReactDOM from 'react-dom';

import configureStore from './store';

import App from './App';

const store = configureStore();

ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
);
