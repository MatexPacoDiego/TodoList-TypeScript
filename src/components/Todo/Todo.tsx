import { useState } from "react";
import style from "./Todo.module.scss";
import upperLogo from "../../assets/up.png";
import lowerLogo from "../../assets/down.png";
import taskLogo from "../../assets/logo.png";
import trash from "../../assets/trash.png";

export default function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  function handleAdd(): void {
    setTasks((t) => [...t, input]);
    setInput("");
  }

  function handleClickUpper(index: number): void {
    const updateTable: string[] = [...tasks];
    if (index > 0) {
      [updateTable[index], updateTable[index - 1]] = [
        updateTable[index - 1],
        updateTable[index],
      ];
    }

    setTasks(updateTable);
  }

  function handleClickLower(index: number): void {
    const updateTable: string[] = [...tasks];
    if (index < tasks.length - 1) {
      [updateTable[index], updateTable[index + 1]] = [
        updateTable[index + 1],
        updateTable[index],
      ];
    }

    setTasks(updateTable);
  }

  function handleRemove(index: number) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  return (
    <div className={style.todoList}>
      <div className={style.taskLogo}>
        <h1>
          <img src={taskLogo} alt="" />
          Add your tasks
        </h1>
      </div>
      <div className={style.inputTask}>
        <input
          className={style.input}
          type="text"
          value={input}
          placeholder="Go out with a dog ..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className={style.taskHead}>
        <span className={style.taskTekst}>Your tasks:</span>
        <div className={style.list_container}>
          <ol>
            {tasks.map((task: string, index: number) => (
              <li key={index}>
                <div className={style.number}>{index + 1}.</div>
                <div className={style.taskList}>{task}</div>
                <div className={style.buttons}>
                  <button onClick={() => handleClickUpper(index)}>
                    <img className={style.up} src={upperLogo} alt="up" />
                  </button>
                  <button onClick={() => handleClickLower(index)}>
                    <img className={style.down} src={lowerLogo} alt="down" />
                  </button>
                  <button onClick={() => handleRemove(index)}>
                    <img className={style.trash} src={trash} alt="trash" />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
