import { IconTrash } from "./IconTrash.js";

function inputTask() {
  const $inputTask = document.createElement("input");
  $inputTask.setAttribute("type", "checkbox");
  return $inputTask;
}

function taskText(description) {
  const $taskText = document.createElement("p");
  $taskText.innerText = description;
  return $taskText;
}

export function Task(description, taskId) {
  const $task = document.createElement("div");
  $task.classList.add("task");
  $task.appendChild(inputTask());
  $task.appendChild(taskText(description));
  $task.appendChild(IconTrash());
  $task.setAttribute("id", taskId);
  return $task;
}
