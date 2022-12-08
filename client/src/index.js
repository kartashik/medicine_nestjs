import React, {createContext} from 'react';
import App from './App';
import UserStore from './store/UserStore';
import { createRoot } from "react-dom/client";


export const Context = React.createContext();


createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      user: new UserStore(),
  }}>
      <App />
  </Context.Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

