import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => setMenuOpen((prev) => !prev);

  return (
    <div>
      <div className="hidden md:navbar bg-base-100 shadow-sm">
        {/** NavBar for Desktop */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Joy Of Software</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>YouTube</a>
            </li>
            <li>
              <a>Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Joy Of Software</a>
        </div>
        <div className="navbar-end pr-7">
          <details className="dropdown">
            <summary className="btn btn-ghost m-1">
              <label className="swap">
                <div className="swap-off">
                  <Icon icon="charm:menu-hamburger" width="24" height="24" />
                </div>
                <div className="swap-on">
                  <Icon icon="mingcute:close-fill" width="24" height="24" />
                </div>
              </label>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
