import Image from "next/image";
import building from "../../public/building.png";

export const PersonalProjects = () => {
  return (
    <section id="proyectos" className="flex flex-col items-center">
      <h2 className="font-medium text-2xl md:text-[26px] pb-10">
        Proyectos personales
      </h2>
      <Image src={building} alt="Under construction" />
    </section>
  );
};
