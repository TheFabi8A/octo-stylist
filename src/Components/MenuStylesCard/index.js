export { default as MenuStylesCard } from "./MenuStylesCard";

import * as htmlToImage from "html-to-image";
import { useContext } from "react";
import { GithubUserContext } from "@user-context";
import { JavaScriptIcon } from "../Svg/JavaScriptIcon";
import { PythonIcon, ReactIcon, VSCodeIcon } from "../Svg";

export const Index = () => {
  const { setAccentColor, dataUser } = useContext(GithubUserContext);

  const BackgroundsPatternsData = [
    {
      technology: "React",
      Icon: ReactIcon,
    },
    {
      technology: "JavaScript",
      Icon: JavaScriptIcon,
    },
    {
      technology: "Python",
      Icon: PythonIcon,
    },
    {
      technology: "VSCode",
      Icon: VSCodeIcon,
    },
  ];

  const downloadCard = () => {
    const card = document.querySelector(".github-user-card");
    htmlToImage.toPng(card).then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${dataUser.login}-github-card.png`;
      link.click();
    });
  };

  const handleSetAccentColor = () => {
    const color = document.querySelector("#bg-color-card").value;
    setAccentColor(color);
  };

  return { downloadCard, handleSetAccentColor, BackgroundsPatternsData };
};
