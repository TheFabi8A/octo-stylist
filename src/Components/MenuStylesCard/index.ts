export { default as MenuStylesCard } from "./MenuStylesCard";

import * as htmlToImage from "html-to-image";

import { ChangeEventHandler, useContext, useState } from "react";

import {
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  TailwindcssIcon,
  VSCodeIcon,
  ViteIcon,
} from "../Icons";
import { Context } from "../../Context";

export const Index = () => {
  const {
    dataUser,
    setBannerCardImageFile,
    bannerCardImageFile,
    CardHeaderBannerRef,
    CardHeaderBannerPreviewRef,
    CompanyIconRef,
    GitHubUserCardRef,
    BannerGradientOneRef,
    BannerGradientTwoRef,
  } = useContext(Context);

  const [uploadImageFailedMessage, setUploadImageFailedMessage] = useState<
    string | null
  >(null);

  const BackgroundsPatternsData = [
    {
      technology: "React",
      Icon: ReactIcon,
      StrongColor: "#80DEEA",
    },
    {
      technology: "JavaScript",
      Icon: JavaScriptIcon,
      StrongColor: "#FFFF00",
    },
    {
      technology: "Python",
      Icon: PythonIcon,
      StrongColor: "#0277BD",
    },
    {
      technology: "VSCode",
      Icon: VSCodeIcon,
      StrongColor: "#0277BD",
    },
    {
      technology: "Tailwindcss",
      Icon: TailwindcssIcon,
      StrongColor: "#00ACC1",
    },

    {
      technology: "Vite",
      Icon: ViteIcon,
      StrongColor: "#9231BE",
    },
  ];

  const handleDownloadCard = () => {
    const card = document.querySelector(".github-user-card") as HTMLElement;
    htmlToImage.toPng(card).then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${dataUser.login}-github-card.png`;
      link.click();
    });
  };

  const handleBannerCardChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      setBannerCardImageFile(URL.createObjectURL(file));
    }
  };

  const handleRangeChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (bannerCardImageFile) {
      if (CardHeaderBannerRef.current) {
        CardHeaderBannerRef.current.style.backgroundPositionY = `${value}%`;
      }

      if (CardHeaderBannerPreviewRef.current) {
        CardHeaderBannerPreviewRef.current.style.backgroundPositionY = `${value}%`;
      }
    }
  };

  const handleBannerImageDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: any[] };
  }) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (
      file &&
      (file.type.includes("image/webp") ||
        file.type.includes("image/jpeg") ||
        file.type.includes("image/png"))
    ) {
      setBannerCardImageFile(URL.createObjectURL(file));
      setUploadImageFailedMessage("");
    } else {
      setUploadImageFailedMessage("The dragged file is not a valid image.");
    }
  };

  const handlePrimaryColorChange = (e: { target: { value: any } }) => {
    const value = e.target.value;

    if (GitHubUserCardRef.current) {
      GitHubUserCardRef.current.style.background = `linear-gradient(to bottom, transparent, ${value})`;

      GitHubUserCardRef.current.style.borderBottom = `4px dashed ${value}`;
      GitHubUserCardRef.current.style.borderRight = `4px dashed ${value}`;
    }

    if (!bannerCardImageFile) {
      if (BannerGradientOneRef.current) {
        BannerGradientOneRef.current.style.background = `radial-gradient(circle 200px at left, transparent, ${value}2f, transparent)`;
      }
    }
  };

  const handleSecondaryColorChange = (e: { target: { value: any } }) => {
    const value = e.target.value;

    if (GitHubUserCardRef.current) {
      GitHubUserCardRef.current.style.borderTop = `4px solid ${value}`;
      GitHubUserCardRef.current.style.borderLeft = `4px solid ${value}`;
    }

    if (!bannerCardImageFile) {
      if (BannerGradientTwoRef.current) {
        BannerGradientTwoRef.current.style.background = `
        radial-gradient(circle 200px at left, transparent, transparent, ${value}2f)
        `;
      }
    }

    if (CompanyIconRef.current) {
      CompanyIconRef.current.style.fill = `${value}`;
    }
  };

  return {
    handleDownloadCard,
    handleBannerCardChange,
    handleRangeChange,
    BackgroundsPatternsData,
    handleBannerImageDrop,
    uploadImageFailedMessage,
    setUploadImageFailedMessage,
    handlePrimaryColorChange,
    handleSecondaryColorChange,
  };
};
