import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Usercontextprovider from './Context/Usercontextprovider' 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Usercontextprovider>
      <App />
    </Usercontextprovider>
  </StrictMode>
);
