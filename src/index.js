import './styles/index.css';
import './styles/app-base.css';
import './styles/app-components.css';
import './styles/app-utilities.css';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const isPWA = process.env.REACT_APP_PWA === 'on';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// <React.StrictMode>
//   <App />
// </React.StrictMode>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (isPWA) {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
