import React, { useContext } from "react";

import { Button } from "@nextui-org/button";

import Index from ".";
import { Context } from "../../Context";
import { MoonIcon, SunIcon } from "../Icons";

export default function BtnToggleTheme() {
  const { theme } = useContext(Context);
  Index;
  const { themeSwitch } = Index();

  return (
    <Button
      color="default"
      variant="faded"
      title={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
      size="md"
      aria-label={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={themeSwitch}
      className="uppercase"
      isIconOnly
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
