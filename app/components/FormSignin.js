import { InputLogin } from "./InputLogin.js";
import { ButtonSubmit } from "./ButtonSubmit.js";
import { SigninHelper } from "../helpers/SigninHelper.js";

export function FormSignin() {
  const $form = document.createElement("form");
  $form.setAttribute("id", "FormSignin");
  $form.appendChild(InputLogin("email"));
  $form.appendChild(InputLogin("password"));
  $form.appendChild(ButtonSubmit("Iniciar Sesion"));

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    SigninHelper();
  });

  return $form;
}
