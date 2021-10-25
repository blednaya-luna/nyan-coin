import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import './index.css';

const renderTarget = document.querySelector('#app');
render(<App />, renderTarget);
