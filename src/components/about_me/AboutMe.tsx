import fotoCv from "../../assets/img/fotoCv.webp";
import ProfileLinks from "../profile_links/ProfileLinks";
import Stack from "../stack/Stack";

const AboutMe = () => {
  return (
    <section className="flex flex-wrap justify-evenly items-center pt-36">
      <div className="flex flex-col items-center gap-2">
        <span className="flex items-center justify-center p-2 border border-green-500 rounded-2xl h-6 text-[13px] font-medium bg-green-100 text-green-700 shadow-[0px_0px_10px_-2px_rgba(0,194,123,0.69)]">
          Disponible para trabajar
        </span>
        <img
          src={fotoCv}
          alt="Foto Facundo D'Addese"
          width={250}
          className="rounded-[50%]"
        />
      </div>
      <div className="flex justify-center gap-7 flex-col">
        <div>
          <h1 className="text-(length:--text-title) font-bold">
            Hola, soy <span className="text-[#266ac3]">Facundo D'Addese</span>
          </h1>
          <p className="font-semibold text-[14px] text-gray-400">
            Frontend Developer
          </p>
        </div>
        <p className="text-(length:--text-paragraph) max-w-120 wrap-break-word">
          Estudiante avanzado de la Licenciatura en Sistemas. Vivo en Buenos
          Aires, Argentina, y me especializo en el desarrollo de aplicaciones
          web con React, TypeScript y Tailwind CSS.
        </p>
        <ProfileLinks />
      </div>
      <Stack />
    </section>
  );
};

export default AboutMe;
