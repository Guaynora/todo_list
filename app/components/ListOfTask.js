import { auth, fs } from "../helpers/firebaseConf.js";
import { Task } from "./Task.js";

export function ListOftask() {
  const $listTask = document.createElement("div");
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection(user.uid).onSnapshot((snapshot) => {
        $listTask.innerHTML = null;
        snapshot.forEach((doc) => {
          if (!doc) {
            $listTask.innerHTML = null;
          } else {
            const tasks = doc.data();
            tasks.id = doc.id;
            $listTask.appendChild(Task(tasks.description, tasks.id));
          }
        });
      });
    }
  });
  return $listTask;
}
