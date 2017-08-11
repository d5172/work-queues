import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const socketUri = 'ws://localhost:3001';

console.log('opening websocket');

const socket = new window.WebSocket(socketUri);

socket.onmessage = function(event) {
  var envelope = JSON.parse(event.data);
  console.log(envelope);
};
