import { authState } from "../helpers/authState.js";
import { Home } from "../pages/Home.js";
import { Login } from "../pages/Login.js";
import { Signup } from "../pages/Signup.js";

export function Router() {
  const d = document;
  const $root = d.getElementById("root");
  let { hash } = location;
  authState();
  if (!hash || hash === "#/") {
    $root.appendChild(Home());
  } else if (hash === "#register") {
    $root.appendChild(Signup());
  } else if (hash === "#login") {
    $root.appendChild(Login());
  }
}
