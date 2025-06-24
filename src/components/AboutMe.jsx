const AboutMe = () => {
  const text = (
    <>
      <p className="text-2xl pb-5 font-bold">
        I'm <span className="text-secondary font-bold">Joyanto Chanda</span>,
        full-stack software engineer since 2020.
      </p>
      <p className="text-lg pb-5">
        As a Full-Stack Software Engineer, I work with a wide variety of
        technologies. I've worked extensively with Python (Flask, FastAPI) and
        JavaScript/TypeScript (REACT). I've done a little work with Java (Spring
        Boot) too. <br />
      </p>
      <p className="text-lg pb-5">
        I think the role of a Full-Stack Engineer has expanded significantly,
        even in the short time I've been a part of the industry. As well as
        being versed in Fronted and Backend technologies, I feel it's becoming
        even more important to understand infrastructure. I've started working a
        lot more with Terraform (deploying into AWS) and looking into DevOps
        much more. One of my example projects contains some GitHub Actions
        pipeline to automatically lint, format and deploy new static web pages.
        Be sure to check them out below!
      </p>
    </>
  );

  const summaryForm = (
    <>
      <p>
        <span className="font-bold">Name:</span> Joyanto Chanda
      </p>
      <div className="divider" />
      <p>
        <span className="font-bold">Email: </span>joyanto.chanda@gmail.com
      </p>
      <div className="divider" />
      <p>
        <span className="font-bold">Age: </span>30
      </p>
      <div className="divider" />
      <p>
        <span className="font-bold">From: </span>Birmingham, UK
      </p>
      <div className="divider" />
      <div className="w-full flex justify-center">
        <button className="btn btn-secondary rounded-4xl w-60">
          Download CV
        </button>
      </div>
    </>
  );

  return (
    <div id="about-me" className="mx-auto w-9/10 pb-5">
      {/** Desktop Version */}
      <div
        className="lg:block hidden mt-auto rounded-xl"
        style={{ background: "var(--web-page-bg)" }}
      >
        <div className="flex flex-col">
          <div className="text-9xl opacity-8 font-bold tracking-widest mx-auto uppercase mb-0">
            About me
          </div>
          <div className="text-4xl font-bold absolute self-center leading-normal mb-0 mt-8">
            Who am I?
            <div className="divider divider-secondary w-20 mx-auto mt-0"></div>
          </div>
        </div>
        <div className="flex flex-row w-4/5 mx-auto space-x-5">
          <div className="basis-7/10">{text}</div>
          <div className="basis-3/10">{summaryForm}</div>
        </div>
      </div>
      {/** Mobile Version */}
      <div
        className="flex lg:hidden mt-auto rounded-xl flex-col pt-5"
        style={{ background: "var(--web-page-bg)" }}
      >
        <div className="w-4/5 mx-auto text-center">
          <p className="text-4xl font-bold">Who am I?</p>
          <div className="divider divider-secondary w-20 mx-auto" />
        </div>
        <div className="text-lg w-4/5 mx-auto">{text}</div>
        <div className="w-4/5 mx-auto">{summaryForm}</div>
      </div>
    </div>
  );
};

export default AboutMe;
