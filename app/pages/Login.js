import { ButtonProvider } from "../components/ButtonProvider.js";
import { FormSignin } from "../components/FormSignin.js";
import { TitleForm } from "../components/TitleForm.js";
import { auth } from "../helpers/firebaseConf.js";

function Or() {
  const $or = document.createElement("p");
  $or.classList.add("orDivision");
  $or.innerHTML = `ó`;
  return $or;
}

function Register() {
  const $registrar = document.createElement("a");
  $registrar.innerHTML = "Registrarse";
  $registrar.setAttribute("href", "#register");
  $registrar.addEventListener("click", (e) => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        location.replace("#register");
      }
    });
  });
  return $registrar;
}

export function Login() {
  const $login = document.createElement("section");
  $login.classList.add("login");
  $login.appendChild(TitleForm("Crea tus tareas diarias"));
  $login.appendChild(ButtonProvider("google"));
  $login.appendChild(ButtonProvider("github"));
  $login.appendChild(Or());
  $login.appendChild(FormSignin());
  $login.appendChild(Register());
  return $login;
}
