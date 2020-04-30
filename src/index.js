import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { 
  loadState ,
   saveState } from './localstorage';

const persistedState = loadState();


const store = createStore(rootReducer
  ,persistedState
  );
store.subscribe(()=>{
  saveState(store.getState())
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App/>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
