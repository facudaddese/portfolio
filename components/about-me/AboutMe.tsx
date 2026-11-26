import Image from "next/image";
import { ProfileLinks } from "./ProfileLinks";
import photo from "../../public/photo.jpg";
import { links } from "@/app/data/links";

export const styleSpan =
  "text-sm sm:text-base text-gray-400 dark:text-gray-500";

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="flex flex-col gap-20 pt-30">
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-end p-2 border border-green-500 rounded-2xl h-6 text-[13px] font-medium bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400 dark:border-green-600 shadow-[0px_0px_10px_-2px_rgba(0,194,123,0.69)]">
            Disponible para trabajar
          </span>
          <Image
            src={photo}
            alt="Facundo D'Addese"
            priority
            width={250}
            className="rounded-[10px]"
          />
        </div>
        <div className="flex justify-center items-center lg:items-start gap-6 flex-col pt-5 lg:w-auto w-full">
          <div className="text-center lg:text-start">
            <h1 className="max-xs:text-2xl text-3xl pb-1 font-medium">
              Hola, soy{" "}
              <strong className="text-blue-500 dark:text-blue-400">
                Facundo {`D'Addese`}
              </strong>
            </h1>
            <span className={`${styleSpan}`}>Frontend Developer</span>
          </div>
          <div className="max-w-140">
            <p className="text-center lg:text-start text-[15px] sm:text-[16px] dark:text-gray-400">
              Estudiante avanzado de la Licenciatura en Sistemas y desarrollador
              frontend. Vivo en Buenos Aires, Argentina, me especializo en el
              desarrollo de aplicaciones web con React, Next.js, TypeScript y
              Tailwind CSS.
            </p>
          </div>
          <ProfileLinks links={links} isFooter={false} />
        </div>
      </div>
    </section>
  );
};
