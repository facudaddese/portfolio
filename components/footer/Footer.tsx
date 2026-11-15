"use client";

import { useContactForm } from "@/hooks";
import { ProfileLinks } from "../about-me/ProfileLinks";

const style =
  "w-full border-b border-gray-300 dark:border-gray-700 bg-transparent focus:outline-0 focus:border-blue-500 px-3 py-1 rounded-b-[5px] mb-6 placeholder:italic dark:text-gray-400";

export const Footer = () => {
  const { status, sendEmail } = useContactForm();

  return (
    <footer
      id="contacto"
      className="flex flex-col items-center justify-center pt-20 scroll-mt-20"
    >
      <h2 className="text-center font-bold text-[18px] md:text-[25px]">
        Contacto
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e.currentTarget);
        }}
        className="flex flex-col pt-5 w-full max-w-130 pb-6"
      >
        <input
          type="text"
          name="name"
          className={style}
          placeholder="Ingrese su nombre..."
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Ingrese su apellido..."
          className={style}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo electrónico..."
          className={style}
          required
        />
        <textarea
          name="message"
          placeholder="Ingrese su mensaje..."
          className={`h-40 ${style}`}
          required
        ></textarea>

        <div className="flex flex-col items-center gap-2 pt-2 ">
          <button
            type="submit"
            disabled={status === "sending"}
            className="border border-gray-400 dark:border-gray-600 w-20 p-1 rounded-[10px] cursor-pointer hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 disabled:opacity-50"
          >
            {status === "sending" ? "..." : "Enviar"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              ¡Mensaje enviado! Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Hubo un error. Intentá de nuevo.
            </p>
          )}
        </div>
      </form>
      <div className="pt-5">
        <ProfileLinks />
      </div>
      <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-10">
        &copy; 2026 Facundo {`D'Addese`}.
      </p>
    </footer>
  );
};
