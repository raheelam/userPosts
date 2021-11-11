import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import UserPosts from "./components/user-posts/UserPosts";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/:username/:id/posts" exact element={<UserPosts />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
