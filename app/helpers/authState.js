import { auth } from "./firebaseConf.js";

export function authState() {
  auth.onAuthStateChanged((user) => {
    const { hash } = location;
    if (user) {
      location.replace("#");
    } else {
      if (!hash || hash == "#") {
        location.replace("#login");
      }
      if (location == "#register") {
        location.replace("#register");
      }
    }
  });
}
