import Image from "next/image";
import { ProfileLinks } from "./ProfileLinks";
import yo from "../../public/yo.jpg";

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="flex flex-col gap-20 pt-30">
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-end p-2 border border-green-500 rounded-2xl h-6 text-[13px] font-medium bg-green-100 text-green-700 shadow-[0px_0px_10px_-2px_rgba(0,194,123,0.69)]">
            Disponible para trabajar
          </span>
          <Image
            src={yo}
            alt="Facundo D'Addese"
            priority
            width={250}
            className="rounded-[10px]"
          />
        </div>
        <div className="flex justify-center gap-6 flex-col pt-5 sm:w-auto w-full">
          <div className="text-center sm:text-start">
            <h1 className="sm:text-3xl text-xl pb-1">
              Hola, soy{" "}
              <strong className="text-blue-500">Facundo {`D'Addese`}</strong>
            </h1>
            <span className="text-sm sm:text-base text-gray-500">
              FullStack Developer
            </span>
          </div>
          <div className="max-w-140 wrap-break-word">
            <p className="text-center sm:text-start text-[15px] sm:text-[16px]">
              Estudiante avanzado de la Licenciatura en Sistemas. Vivo en Buenos
              Aires, Argentina, me especializo en el desarrollo de aplicaciones
              web con React, Next.js, TypeScript y Tailwind CSS, utilizando
              PostgreSQL como base de datos relacional.
            </p>
          </div>
          <ProfileLinks />
        </div>
      </div>
    </section>
  );
};
