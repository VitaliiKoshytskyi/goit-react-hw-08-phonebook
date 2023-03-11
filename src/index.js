import { PersistGate } from 'redux-persist/integration/react'
import React from 'react';
import { Provider } from 'react-redux';
import { store,persistor} from 'redux/store';
import ReactDOM from 'react-dom/client';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <App />
          </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
