const DesktopCard = ({ children }) => {
  return (
    <div
      id="about-me"
      className="mx-auto w-9/10 pb-5 rounded-xl"
      style={{ background: "var(--web-page-bg)" }}
    >
      {children}
    </div>
  );
};

export default DesktopCard;
