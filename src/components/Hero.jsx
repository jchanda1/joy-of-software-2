const Hero = () => {
  return (
    <div className="mx-auto hero bg-base-200 mt-auto w-2/3 rounded-4xl">
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
  );
};

export default Hero;
