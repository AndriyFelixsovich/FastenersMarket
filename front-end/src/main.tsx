import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import '/src/stylesheet/styles.scss';

const root = (ReactDOM as any).createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
  </React.StrictMode>
);