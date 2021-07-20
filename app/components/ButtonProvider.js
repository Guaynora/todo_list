import { auth, google, github } from "../helpers/firebaseConf.js";

export function ButtonProvider(texto) {
  const $button = document.createElement("button");
  $button.classList.add("buttonProvider");
  if (texto == "google") {
    $button.classList.add(texto);
    $button.innerHTML = `<i class="fab fa-google"></i> Continuar con google `;
  } else if (texto == "github") {
    $button.classList.add(texto);
    $button.innerHTML = `<i class="fab fa-github"></i> Continuar con github`;
  }

  $button.addEventListener("click", (e) => {
    Provider(texto);
  });

  return $button;
}

function Provider(texto) {
  if (texto == "google") {
    auth
      .signInWithPopup(google)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
  } else if (texto == "github") {
    auth
      .signInWithPopup(github)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
      });
  }
}
