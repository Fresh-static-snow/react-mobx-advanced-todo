import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./context";
import { TodoList } from "./store/todo-list";

const todoList = new TodoList([
  "Learn React",
  "Watch Anime",
  "Suicide",
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider value={todoList}>
    <App />
  </StoreProvider>
);
