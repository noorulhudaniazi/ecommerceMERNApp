import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Clientprovider from './pages/context/clientprovider';
import Prodprovider from './pages/prodcontext/prodProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Clientprovider>
      <Prodprovider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Prodprovider>
    </Clientprovider>
);

reportWebVitals();
