import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";

// const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
// unsubscribe();
// store.subscribe(()=> console.log("hello"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

