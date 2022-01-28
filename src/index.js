// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { Provider } from './context/context';

import './index.css';

ReactDOM.render(
    <SpeechProvider appId='fba9d749-c774-4f41-a3c3-3a0b5c68413b' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

