import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./layout/LayoutRoot";

// RDX TKT 
import { store } from './config/store'
import { Provider } from 'react-redux'

// Pages Import 
import Home from './pages/Home';
import About from './pages/About';
import Reels from './pages/Reels';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import GamePage from './pages/GamePage';

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<Root />}>
      <Route path="reels" element={<Reels />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="explore" element={<Explore />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path=":gameslug" element={<GamePage />} />
    </Route>
  </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);