import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./App.js";

let $app = document.querySelector("div#app");

if (!$app) {
  $app = document.createElement("div");
  document.body.appendChild($app);
}

const root = createRoot($app);
root.render(<App />);
