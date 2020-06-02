import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// ReactDOM.hydrate(<App initialData={window.initialData} />, document.getElementById('root'));

ReactDOM.hydrate(<App initialData={{}} />, document.getElementById('root'));
