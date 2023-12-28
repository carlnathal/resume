import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './components/WrapComponent';
import axios from 'axios';

axios.defaults.withCredentials = true;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <WrapComponent />
);

