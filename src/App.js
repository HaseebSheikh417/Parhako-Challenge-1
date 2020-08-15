import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './Components/Title';
import Photos from './Components/Photos';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Redirect from="/" to="Header" />
        <Route path="/" exact component={Photos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
