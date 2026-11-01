// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import Switch from "./switch.jsx";
// import ZodForm from "./Zodform.jsx";
// import Car from "./compo.jsx";
// import Obj from "./obj.jsx";
// import UseEffect from "./useeffect.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <Switch /> */}
//     {/* <Car /> */}
//     {/* <Obj /> */}
//     <UseEffect />
//   </StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);