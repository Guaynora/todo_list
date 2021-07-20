import { auth, fs } from "../helpers/firebaseConf.js";

function Input() {
  const $input = document.createElement("input");
  $input.setAttribute("id", "inpuTask");
  $input.placeholder = "Ingresa tu nueva tarea aqui";
  return $input;
}

export function NewTask() {
  const $newTask = document.createElement("form");
  $newTask.setAttribute("id", "formTask");
  $newTask.setAttribute("autocomplete", "off");
  $newTask.appendChild(Input());

  $newTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputTask = document.getElementById("inpuTask").value;
    createTask(inputTask);
    $newTask.reset();
  });

  return $newTask;
}

function createTask(value) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection(user.uid)
        .add({
          description: value,
        })
        .then(() => {
          console.log("tarea agregada");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      console.log("nada por agregar");
    }
  });
}
