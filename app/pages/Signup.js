import { FormSignup } from "../components/FormSignup.js";
import { TitleForm } from "../components/TitleForm.js";

export function Signup() {
  const $signup = document.createElement("section");
  $signup.appendChild(TitleForm("Registro"));
  $signup.appendChild(FormSignup());
  return $signup;
}
