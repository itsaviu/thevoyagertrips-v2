import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {StoreProvider} from "./store/store"; // You can also use <link> for styles

AOS.init({delay: 500});

ReactDOM.render(
    <StoreProvider>
        <App/>
    </StoreProvider>, document.getElementById('root'));
