import { useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await API.post("/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* 🔹 Separator Line (Projects → Contact) */}
        <div className="mb-10 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={submitHandler}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-lg mx-auto
            bg-white/5 backdrop-blur-md
            border border-white/10
            rounded-2xl
            p-8
            shadow-lg
          "
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="
                w-full px-4 py-3 rounded-lg
                bg-[#020617]
                border border-white/10
                text-white
                placeholder-gray-500
                focus:outline-none focus:border-sky-400
              "
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="
                w-full px-4 py-3 rounded-lg
                bg-[#020617]
                border border-white/10
                text-white
                placeholder-gray-500
                focus:outline-none focus:border-sky-400
              "
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="
                w-full px-4 py-3 rounded-lg
                bg-[#020617]
                border border-white/10
                text-white
                placeholder-gray-500
                focus:outline-none focus:border-sky-400
                resize-none
              "
            />
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-sm mb-4">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mb-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg
              bg-sky-400 text-[#020617]
              font-semibold
              hover:bg-sky-300
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
