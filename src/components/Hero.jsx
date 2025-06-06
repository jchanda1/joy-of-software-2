const Hero = () => {
  return (
    <div className="mx-auto hero bg-base-200 mt-auto w-2/3 rounded-4xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="pr-15">
          <h1 className="text-5xl font-bold">
            Hi my name is <span className="text-primary">Joyanto Chanda</span>
          </h1>
          <p className="pt-6 text-xl">I love writing software.</p>
          <p className="pb-6 text-xl">
            Click below to see what I've been working on recently.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
