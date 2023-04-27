import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { UserForm } from "./UserForm";
import { UserDetails } from "./UserDetails";
import { UserList } from "./UserList";
import { UserEdit } from "./UserEdit";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/adduser" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}
export default App;
