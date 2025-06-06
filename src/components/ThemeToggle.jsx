import { Icon } from "@iconify/react/dist/iconify.js";

const ThemeToggle = () => {
  localStorage.setItem("theme", "dark");

  return (
    <label className="swap swap-flip">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="light" />

      {/* sun icon */}
      <Icon className="swap-off h-6 w-6 fill-current" icon="tabler:sun-high" />

      {/* moon icon */}
      <Icon
        className="swap-on h-6 w-6 fill-current"
        icon="tabler:moon-filled"
      />
    </label>
  );
};

export default ThemeToggle;
