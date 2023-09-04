import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

reportWebVitals();
