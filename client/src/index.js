import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../src/js/store/index'
import App from './App';

const Application = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(Application ,document.getElementById('root'));

serviceWorker.unregister();
