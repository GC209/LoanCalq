import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import NavigationBar from './Root/NavigationBar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="/component1" element={<Component1 />}>
            <Route path="subcomponent1" element={<Subcomponent1 />} />
            <Route path="subcomponent2" element={<Subcomponent2 />} />
          </Route>
          <Route path="/component2" element={<Component2 />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
