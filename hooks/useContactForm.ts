import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export const useContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = async (form: HTMLFormElement) => {
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { status, sendEmail };
};
