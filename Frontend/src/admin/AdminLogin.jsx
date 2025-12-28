import { useState } from "react";
import API from "../services/api";

const AdminLogin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/api/admin/login", { email, password });
    setToken(res.data.token);
    localStorage.setItem("adminToken", res.data.token);
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl mb-4">Admin Login</h2>
      <input
        className="w-full p-2 mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-sky-500 px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default AdminLogin;
