import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './BingoApp';
import reportWebVitals from './misc/reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RapApp from './RapApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CoreApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const EditSession = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const RappingPairs = () => (
  <Provider store={store}>
    <RapApp />
  </Provider>
);

const RoutedApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoreApp />} />
        <Route path="category/:category" element={<CoreApp />} />
        <Route
          path="category/:customName/:customSquares"
          element={<CoreApp />}
        />
        <Route path="create-your-own" element={<EditSession />} />
        <Route path="rap" element={<RappingPairs />} />
      </Routes>
    </Router>
  );
};

root.render(<RoutedApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
