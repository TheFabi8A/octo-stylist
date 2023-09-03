import { useContext } from "react";

import { Button } from "@nextui-org/react";

import { MoonIcon, SunIcon } from "../Svg";

import { GithubUserContext } from "@user-context";

import Index from ".";

export default function BtnToggleTheme() {
  const { theme } = useContext(GithubUserContext);
  Index;
  const { themeSwitch } = Index();

  return (
    <Button
      color={null}
      size="md"
      aria-label={`${
        theme === "dark" ? "cambiar al tema claro" : "cambiar al tema oscuro"
      }`}
      onClick={themeSwitch}
    >
      <span className="uppercase">{theme === "dark" ? "light" : "dark"}</span>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
