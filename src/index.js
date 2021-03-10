import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Post from "./pages/post"
import Home from "./pages/home"

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <div>
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
            <Route exact path="/" component={Home} />
            <App />
        </div>
    </Router>, 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
