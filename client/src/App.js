import React, {useContext, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import {Context} from "./index"
import {observer} from "mobx-react-lite";

const App = observer(() => {
  const {user} = useContext(Context)


  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  );
});

export default App;
