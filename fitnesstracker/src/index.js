import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Instructions from './components/Instructions';
import Planchoice from './components/Planchoice';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="row">
    <Instructions />
    <br />
    <Planchoice />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

