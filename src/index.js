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

// Pages Import 
import Home from './pages/Home';
import About from './pages/About';
import Reels from './pages/Reels';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<Root />}>
      <Route path="reels" element={<Reels />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="explore" element={<Explore />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
    </Route>
  </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);