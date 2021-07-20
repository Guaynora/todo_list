export function InputLogin(text) {
  const $input = document.createElement("input");
  if (text == "password" || text == "passwordSignup") {
    $input.setAttribute("type", "password");
    $input.setAttribute("id", text);
  } else {
    $input.setAttribute("type", "text");
    $input.setAttribute("id", text);
  }

  if (text == "emailSignup") {
    $input.placeholder = "email";
  } else if (text == "passwordSignup") {
    $input.placeholder = "password";
  } else {
    $input.placeholder = text;
  }

  return $input;
}
