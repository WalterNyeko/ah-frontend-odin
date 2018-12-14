import React from 'react';
import ReactDOM from 'react-dom';
import Notify from 'utils/notifications';
import App from 'containers/App';
import * as serviceWorker from './serviceWorker';
import 'sass/app.scss';

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Since we will probably need to user Notifications in very many places,
 * this would be a valid use case for adding it to the window object
 * @type {Notify}
 */
window.Notify = Notify;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
