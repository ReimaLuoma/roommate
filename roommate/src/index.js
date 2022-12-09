import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/base.css';

// recoil
import { RecoilRoot } from 'recoil';

// amplify
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
