import {
  AboutMe,
  Footer,
  Navbar,
  PersonalProjects,
  Stack,
  Tools,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div data-aos="fade-down" suppressHydrationWarning>
        <AboutMe />
        <Stack />
        <Tools />
        <PersonalProjects />
        <Footer />
      </div>
    </>
  );
}
