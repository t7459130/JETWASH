"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function submit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setSent(true);
  }

  return (
    <main className="container">
      <h1>Contact Us</h1>

      {sent ? (
        <p>Message sent successfully.</p>
      ) : (
        <form onSubmit={submit}>
          <input
            name="name"
            placeholder="Name"
            required
          />

          <input
            name="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          />

          <button type="submit">
            Send
          </button>
        </form>
      )}
    </main>
  );
}