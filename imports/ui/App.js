import React from "react";
import AppRouter from "./components/AppRouter";
import { Router } from 'react-router-dom'
import Header from "./components/Header";
import history from "./history";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router history={history}>
      <Header />
      <AppRouter />
    </Router>
  );
}

export default App;
