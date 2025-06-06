const Hero = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="md:hero hidden  bg-base-200 mt-auto rounded-4xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/avatar.png"
            className="max-w-80 rounded-full bg-[oklch(100%_0_0)] shadow-2xl"
          />
          <div className="pr-15">
            <h1 className="text-5xl font-bold">
              Hi my name is <span className="text-primary">Joyanto Chanda</span>
            </h1>
            <p className="pt-6 text-xl">I love writing software.</p>
            <p className="pb-6 text-xl">
              Click below to see what I've been working on recently.
            </p>
            <button className="btn btn-primary">My Projects</button>
          </div>
        </div>
      </div>

      <div className="md:hidden hero bg-base-200 mt-auto rounded-4xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/avatar.png"
            className="max-w-50 rounded-full bg-[oklch(100%_0_0)] shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold text-center">
              Hi my name is <span className="text-primary">Joyanto Chanda</span>
            </h1>
            <p className="pt-3 text-xl text-center">I love writing software.</p>
            <p className="pb-3 text-l text-center">
              Click below to see what I've been working on recently.
            </p>
            <div className="mx-auto w-fit">
              <button className="btn btn-primary">My Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
