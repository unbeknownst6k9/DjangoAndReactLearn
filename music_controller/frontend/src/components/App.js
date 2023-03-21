import React, {Component} from 'react';
import  ReactDOM  from 'react-dom/client';
import {render} from 'react-dom';

const App = ()=>{
    return(
        <div>
            <h1>Test app</h1>
        </div>
    )
}
export default App

/*
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
)*/
//const appDiv = document.getElementById("app");
//render(<App/>, appDiv);