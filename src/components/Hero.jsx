const Hero = () => {
  return (
    <div id="hero" className="max-w-11/12 w-9/10 mx-auto">
      {/*desktop hero*/}
      <div
        className="lg:hero hidden mt-auto rounded-xl py-10"
        style={{ background: "var(--web-page-bg)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/avatar.png"
            className="max-w-70 rounded-full bg-[oklch(100%_0_0)] shadow-2xl"
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

      {/*mobile hero*/}
      <div className="lg:hidden relative w-full">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
          <img
            src="/src/assets/avatar.png"
            className="max-w-45 rounded-full bg-[oklch(100%_0_0)] shadow-2xl"
          />
        </div>
        <div
          className="hero bg-base-200 mt-20 rounded-4xl"
          style={{ background: "var(--web-page-bg)" }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse pt-16">
            <div>
              <h1 className="mt-15 text-3xl font-bold text-center">
                Hi my name is{" "}
                <span className="text-primary">Joyanto Chanda</span>
              </h1>
              <p className="pt-3 text-xl text-center">
                I love writing software.
              </p>
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
    </div>
  );
};

export default Hero;
