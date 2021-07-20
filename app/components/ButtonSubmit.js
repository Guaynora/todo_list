export function ButtonSubmit(texto) {
  const $button = document.createElement("button");
  $button.classList.add("buttonSubmit");
  if (typeof texto === "string") {
    $button.innerHTML = texto;
  } else {
    $button.setAttribute("id", "buttonSpinner");
    $button.appendChild(texto);
  }

  return $button;
}
