import fotoCv from "../../assets/img/fotoCv.webp";
import ProfileLinks from "../profile_links/ProfileLinks";
import Stack from "../stack/Stack";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="flex flex-col gap-20 pt-30">
      <div className="flex flex-wrap justify-evenly items-center w-full">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-end p-2 border border-green-500 rounded-2xl h-6 text-[13px] font-medium bg-green-100 text-green-700 shadow-[0px_0px_10px_-2px_rgba(0,194,123,0.69)]">
            Disponible para trabajar
          </span>
          <img
            src={fotoCv}
            alt="Foto Facundo D'Addese"
            width={250}
            className="rounded-[10px]"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center gap-7 flex-col py-5">
          <div>
            <h1 className="text-(length:--text-title) font-heading font-bold">
              Hola, soy{" "}
              <span className="bg-[linear-gradient(90deg,#5B9BD9_0%,#266ac3_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] font-bold">
                Facundo D'Addese
              </span>
            </h1>
            <p className="text-(--color-text-muted) text-sm font-heading">
              Frontend Developer
            </p>
          </div>
          <p className="text-(length:--text-paragraph) text-(--color-text) font-heading max-w-120 wrap-break-word">
            Estudiante avanzado de la Licenciatura en Sistemas. Vivo en Buenos
            Aires, Argentina, me especializo en el desarrollo de aplicaciones
            web con React, TypeScript y Tailwind CSS.
          </p>
          <ProfileLinks />
        </div>
      </div>
      <Stack />
    </section>
  );
};

export default AboutMe;
