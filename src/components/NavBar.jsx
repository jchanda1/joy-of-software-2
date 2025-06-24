import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggle from "./ThemeToggle";
const NavBar = () => {
  return (
    <div>
      <div className="hidden md:navbar bg-primary shadow-sm">
        {/** NavBar for Desktop */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-primary-content">
            Joy Of Software
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-primary-content" href="/">
                About Me
              </a>
            </li>
            <li>
              <a className="text-primary-content" href="/currentprojects">
                Current Projects
              </a>
            </li>
            <li>
              <a className="text-primary-content">Get In Touch</a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden navbar bg-primary shadow-sm">
        {/** NavBar for Mobile/Tablet */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Joy Of Software</a>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <div className="w-10 rounded-full">
                <Icon
                  icon="icon-park-outline:hamburger-button"
                  width="24"
                  height="24"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-xl">About Me</a>
              </li>
              <li>
                <a className="text-xl">YouTube</a>
              </li>
              <li>
                <a className="text-xl">Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
