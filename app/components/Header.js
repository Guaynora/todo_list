import { Logout } from "./Logout.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(Logout());
  return $header;
}
