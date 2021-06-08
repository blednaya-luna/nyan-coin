import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './index.css';

const renderTarget = document.getElementById('app');
render(<App />, renderTarget);
