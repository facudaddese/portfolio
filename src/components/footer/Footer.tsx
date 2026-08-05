import "./Footer.css";
import ProfileLinks from "../profile_links/ProfileLinks";
import { useContactForm } from "../../hooks/useContactForm";

const style =
  "border-b border-(--color-border) focus:outline-0 px-3 py-1 w-130 rounded-b-[5px] mb-6 placeholder:italic text-(--color-text)";

const Footer = () => {
  const { status, sendEmail } = useContactForm();

  return (
    <footer
      id="contacto"
      className="flex flex-col items-center justify-center pt-30"
    >
      <h3 className="text-center text-(length:--text-subtitle) font-heading font-semibold">
        Contacto
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e.currentTarget);
        }}
        className="flex flex-col pt-5 max-w-full font-body pb-6"
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

        <div className="flex flex-col items-center gap-2 pt-2 pb-10">
          <button
            type="submit"
            disabled={status === "sending"}
            className="border w-20 p-1 rounded-[10px] cursor-pointer hover:bg-(--color-text) hover:text-(--color-bg) disabled:opacity-50"
          >
            {status === "sending" ? "..." : "Enviar"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600">
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
      <ProfileLinks />
      <p className="text-sm text-center font-body text-(--color-text-muted) py-6">
        &copy; 2026 Facundo D'Addese.
      </p>
    </footer>
  );
};

export default Footer;
