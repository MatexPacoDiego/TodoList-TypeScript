import style from "./WebLogo.module.scss";
import webLogo from "../../assets/todolist.png";

export default function WebLogo() {
  return (
    <h1 className={style.tekst}>
      <img className={style.Logo} src={webLogo} alt="website logo" />
      TodoList
    </h1>
  );
}
