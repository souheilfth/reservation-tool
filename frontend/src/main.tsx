import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'

declare module '@react-keycloak/web';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './providers/authentication/keycloak.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
    <StrictMode>
      <App />
    </StrictMode>
  </ReactKeycloakProvider>
)
