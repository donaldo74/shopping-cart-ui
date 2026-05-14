import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing"
import { ProductProvider } from './context/ProductContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

Sentry.init({
  dsn: "https://b4237412e9bd7fcdbd96797ea0cba2e4@o4511353910198272.ingest.de.sentry.io/4511387059093584",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events.
  sendDefaultPii: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
