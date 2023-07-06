import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ContrComp} from './ContrComp';
import {RefTask} from './RefTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <ContrComp />
    <RefTask />
    </>
);

