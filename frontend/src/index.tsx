import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from 'react-query';
import {router} from './Routes'
import { HelmetProvider } from 'react-helmet-async';

//Import Components
import './index.css';


const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <HelmetProvider>
        <RouterProvider router={router}/>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);