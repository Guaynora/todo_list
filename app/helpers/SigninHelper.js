import { auth } from "./firebaseConf.js";
import { ButtonSubmit } from "../components/ButtonSubmit.js";
import { Spinner } from "../components/Spinner.js";
import { ErroMessage } from "../components/ErrorMessage.js";

const d = document;

export function SigninHelper() {
  const email = d.querySelector("#email").value;
  const password = d.querySelector("#password").value;

  const form = d.getElementById("FormSignin");
  const button = d.querySelector(".buttonSubmit");
  form.removeChild(button);
  form.appendChild(ButtonSubmit(Spinner()));
  const buttoSpinner = d.getElementById("buttonSpinner");

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      form.removeChild(buttoSpinner);
      form.appendChild(ButtonSubmit("Iniciar Sesión"));
      location.replace("#");
    })
    .catch((error) => {
      let errMessage = error.message;
      const errorP = d.querySelector(".errorMessage");
      if (errorP) {
        form.removeChild(errorP);
      }
      form.removeChild(buttoSpinner);
      form.appendChild(ButtonSubmit("Registrarse"));
      form.appendChild(ErroMessage(errMessage));
    });
}
