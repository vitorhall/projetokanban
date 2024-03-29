import axios from "axios";
import Columns from "../columns/Columns";
import Header from "../header/Header";
import "./board.scss";
import { useEffect, useState } from "react";

function Boards() {
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    dadosTask();
  }, []);

  function dadosTask() {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("http://localhost:5000/cards/", headers)
      .then((response) => {
        const todoValue = response.data.filter(
          (todos) => todos.lista === "todo"
        );
        const doingValue = response.data.filter(
          (doing) => doing.lista === "doing"
        );
        const doneValue = response.data.filter((done) => done.lista === "done");
        setTodo(todoValue);
        setDoing(doingValue);
        setDone(doneValue);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="main-content">
      <Header />
      <Columns todo={todo} doing={doing} done={done} dadosTask={dadosTask} />
    </div>
  );
}

export default Boards;
