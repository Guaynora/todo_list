import { ListOftask } from "./ListOfTask.js";
import { NewTask } from "./NewTask.js";
import { Task } from "./Task.js";

export function MainHome() {
  const $mainHome = document.createElement("div");
  $mainHome.classList.add("mainHome");
  $mainHome.appendChild(NewTask());
  $mainHome.appendChild(ListOftask());
  return $mainHome;
}
