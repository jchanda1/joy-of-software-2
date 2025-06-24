const MobileCard = ({ children }) => {
  return (
    <div
      className="flex lg:hidden mt-auto rounded-xl flex-col pt-5"
      style={{ background: "var(--web-page-bg)" }}
    >
      {children}
    </div>
  );
};

export default MobileCard;
