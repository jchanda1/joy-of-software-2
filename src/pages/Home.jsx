import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
