import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";

import AddCharacter from "./pages/AddCharacter";
import Signup from "./pages/Signup";
import EditCharacter from "./pages/EditCharacter";

import Character from "./pages/Character";

import AllCharacters from "./pages/AllCharacters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-characters",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllCharacters />
          </AuthLayout>
        ),
      },
      {
        path: "/add-character",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddCharacter />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-character/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditCharacter />
          </AuthLayout>
        ),
      },
      {
        path: "/character/:slug",
        element: <Character />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
