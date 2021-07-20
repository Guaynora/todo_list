import { fs, auth } from "../helpers/firebaseConf.js";

export function IconTrash() {
  const $iconTrash = document.createElement("button");
  $iconTrash.innerHTML = `<i class="far fa-trash-alt"></i>`;

  $iconTrash.addEventListener("click", (e) => {
    const nodeButton = e.target.parentNode;
    const nodeTask = nodeButton.parentNode;
    deleteTask(nodeTask.id);
  });
  return $iconTrash;
}

function deleteTask(id) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection(user.uid).doc(id).delete();
    }
  });
}
