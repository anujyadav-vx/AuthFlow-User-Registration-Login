import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
function App() {
  const [page, setPage] = useState("login");
  return (
    <div>
      <nav>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </nav>
      <hr />
      {page === "register" && <Register />}
      {page === "login" && <Login />}
      {page === "profile" && <Profile />}
    </div>
  );
}

export default App;
