import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import jsonData from './Data/data.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App jsonData={jsonData} />);