import { ProfileLinks } from "../about-me/ProfileLinks";
import { links } from "../../app/data/links";

export const Footer = () => {
  return (
    <footer
      id="contacto"
      className="flex flex-col pt-10 border-t border-gray-500/10 dark:border-gray-100/15"
    >
      <div className="flex flex-col items-center gap-1.5">
        <h2 className="text-center font-medium text-2xl">Contactame</h2>
        <a
          href="mailto:facundo.daddese@gmail.com"
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          facundo.daddese@gmail.com
        </a>
      </div>
      <div className="grid sm:flex justify-center gap-7 sm:gap-0 sm:justify-evenly items-center py-10">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 order-1 sm:order-0">
          &copy; 2026 Facundo {`D'Addese`}.
        </p>
        <div>
          <ProfileLinks links={links} isFooter={true} />
        </div>
      </div>
    </footer>
  );
};
