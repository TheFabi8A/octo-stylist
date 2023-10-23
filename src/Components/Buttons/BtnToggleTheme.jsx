import { useContext } from "react";

import { Button } from "@nextui-org/button";

import { MoonIcon, SunIcon } from "../Svg";

import { GithubUserContext } from "@user-context";

import Index from ".";

export default function BtnToggleTheme() {
  const { theme } = useContext(GithubUserContext);
  Index;
  const { themeSwitch } = Index();

  return (
    <Button
      title={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
      color={null}
      size="md"
      aria-label={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={themeSwitch}
      className="uppercase"
      endContent={theme === "dark" ? <SunIcon /> : <MoonIcon />}
    >
      {theme === "dark" ? "light" : "dark"}
    </Button>
  );
}
