import style from "./App.module.scss";
import Todo from "./components/Todo/Todo.tsx";
import WebLogo from "./components/WebLogo/WebLogo.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className={style.container}>
      <div className={style.webLogo}>
        <WebLogo />
      </div>
      <div className={style.todo}>
        <Todo />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
