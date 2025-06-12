"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}
const grecaptcha = typeof window !== "undefined" ? window.grecaptcha : undefined;

export default function ContactForm() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Automatically get token on load
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6LfBPF4rAAAAAAVSHSIcZjicPt5Hotj0hy8iHpnK", { action: "submit" })
          .then((token: string) => {
            setToken(token);
          });
      });
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/verify-recaptcha", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    alert(result.success ? "Success!" : "Bot detected!");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 bg-white rounded shadow">
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
