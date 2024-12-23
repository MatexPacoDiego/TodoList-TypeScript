import userLogo from "../../assets/user_logo.png";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.user}>
      <img className={style.userLogo} src={userLogo} alt="user logo" />
      <h1>Matex</h1>
    </div>
  );
}
