import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import LangState from './Context/lang';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<LangState>
			<App />
		</LangState>
	</BrowserRouter>,
	document.getElementById('root')
);