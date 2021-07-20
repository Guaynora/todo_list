export function ErroMessage(error) {
  const $error = document.createElement("p");
  $error.classList.add("errorMessage");
  $error.innerHTML = error;
  return $error;
}
