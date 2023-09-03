import { useContext, useEffect } from "react";
import { GithubUserContext } from "@user-context";

export * from "./BtnToggleTheme";

export default function Index() {
  const { theme, setTheme } = useContext(GithubUserContext);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const isDarkTheme =
      userTheme === "dark" || (!userTheme && systemTheme === "dark");

    document.documentElement.classList.toggle("dark", isDarkTheme);
    setTheme(isDarkTheme ? "dark" : "light");
  }, [setTheme]);

  const themeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return { themeSwitch };
}
