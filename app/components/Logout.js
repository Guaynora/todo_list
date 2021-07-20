import { auth } from "../helpers/firebaseConf.js";

export function Logout() {
  const $logout = document.createElement("p");
  $logout.classList.add("logout");
  $logout.innerHTML =
    'Cerrar sesion <span><i class="fas fa-sign-out-alt"></i></span>';

  $logout.addEventListener("click", (e) => {
    auth.signOut().then(() => console.log("logout"));
  });

  return $logout;
}
