import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = ({ token }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get("/api/admin/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setMessages(res.data));
  }, [token]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl mb-6">Contact Messages</h2>

      {messages.map((m) => (
        <div key={m._id} className="bg-slate-800 p-4 rounded mb-4">
          <h4 className="font-semibold">{m.name}</h4>
          <p className="text-sm text-gray-400">{m.email}</p>
          <p className="mt-2">{m.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
