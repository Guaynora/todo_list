import { InputLogin } from "./InputLogin.js";
import { ButtonSubmit } from "./ButtonSubmit.js";
import { SignupHelper } from "../helpers/SignupHelper.js";

export function FormSignup() {
  const $form = document.createElement("form");
  $form.setAttribute("id", "FormSignup");
  $form.appendChild(InputLogin("emailSignup"));
  $form.appendChild(InputLogin("passwordSignup"));
  $form.appendChild(ButtonSubmit("Registrarse"));

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    SignupHelper();
  });

  return $form;
}
