import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SingUp/SingUp";
import TodoList from "./pages/TodoList/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SingUp />}></Route>
        <Route path="/todos" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
