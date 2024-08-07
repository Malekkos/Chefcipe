import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/homepage/Home';
import Main from './components/Main';
import RecipePage from './components/recipepage/Recipe';
import RecipeCreationPage from './components/recipecreationpage/RecipeCreation';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/bounties",
        element: null,
      },
      {
        path: "/recipes",
        element: <RecipePage />,
      },
      {
        path: "/recipes/creation",
        element: <RecipeCreationPage />
      },
      {
        path: "/profile",
        element: null,
      },
      {
        path: "/signup",
        element: null,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
