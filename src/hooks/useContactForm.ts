import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = "service_6hrfv8l";
const TEMPLATE_ID = "template_lfvwzpn";
const PUBLIC_KEY = "l-KXdsYqFE11VRNqI";

export const useContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = async (form: HTMLFormElement) => {
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return { status, sendEmail };
};
