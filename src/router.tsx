import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { WorkFlows } from "./components/Workflows";

export const Router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "workflows", element: <WorkFlows /> },
      { path: '', element: <Navigate to="/workflows" /> }
    ],
  },
]);