import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <Icon icon="uil:linkedin" width="24" height="24" />
        </a>
        <a>
          <Icon icon="mdi:youtube" width="24" height="24" />
        </a>
        <a>
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
