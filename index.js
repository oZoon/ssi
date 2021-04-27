import { registerRootComponent } from 'expo';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/core/reducers';
import App from './src/core';

const store = createStore(reducers, applyMiddleware(thunk));
const logging = () => console.log(store.getState());
store.subscribe(logging);

const Core = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
registerRootComponent(Core);
