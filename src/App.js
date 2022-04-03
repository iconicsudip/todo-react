import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
function App() {
  let Todos;
  if (localStorage.getItem("todos") === null) {
    Todos = [];
  } else {
    Todos = JSON.parse(localStorage.getItem("todos"));
  }
  function onDelete(todo) {
    let updateTodos = todos.filter((e) => {
      return e != todo;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }
  const addTodo = (title, desc) => {
    let srno = todos.length == 0 ? 1 : todos[todos.length - 1].srno + 1;
    const newTodo = {
      srno: srno,
      title: title,
      desc: desc,
    };
    todos = todos.concat(newTodo);
    setTodos(todos);
    console.log(todos);
  };
  let [todos, setTodos] = useState(Todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  let checkTodo = todos.length == 0 ? false : true;
  return (
    <>
      <Router>
        <Header haveTodo={checkTodo} />
        <Routes>
            <Route exact path="/" element={<Todo todos={todos} onDelete={onDelete} addTodo={addTodo} />}/>
            <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />        
      </Router>
    </>
  );
}

export default App;
