import { Header } from "../components/Header.js";
import { MainHome } from "../components/MainHome.js";

export function Home() {
  const $home = document.createElement("div");
  $home.appendChild(Header());
  $home.appendChild(MainHome());
  return $home;
}
