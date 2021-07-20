import { Router } from "./components/Router.js";

export function App() {
  const d = document;
  const $root = d.getElementById("root");
  $root.innerHTML = null;
  Router();
}
