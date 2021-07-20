import { auth } from "./firebaseConf.js";
import { ButtonSubmit } from "../components/ButtonSubmit.js";
import { Spinner } from "../components/Spinner.js";
import { ErroMessage } from "../components/ErrorMessage.js";

const d = document;

export function SignupHelper() {
  const emailSignup = d.querySelector("#emailSignup").value;
  const passwordSignup = d.querySelector("#passwordSignup").value;

  const form = d.getElementById("FormSignup");
  const button = d.querySelector(".buttonSubmit");
  form.removeChild(button);
  form.appendChild(ButtonSubmit(Spinner()));

  const buttoSpinner = d.getElementById("buttonSpinner");

  auth
    .createUserWithEmailAndPassword(emailSignup, passwordSignup)
    .then((cred) => {
      form.removeChild(buttoSpinner);
      form.appendChild(ButtonSubmit("Registrarse"));
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
