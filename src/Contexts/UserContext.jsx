import { createContext, useEffect, useRef, useState } from "react";

export const GithubUserContext = createContext();

import { ChildrenPropTypes } from "../PropTypes";

import useFetch from "../Hooks/useFetch";

UserContext.propTypes = {
  children: ChildrenPropTypes,
};

export default function UserContext({ children }) {
  const [theme, setTheme] = useState("dark" || "light");

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "thefabi8a",
  );

  const [queryInput, setQueryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { dataUser, errorFetch, topRepos, remainingRequests } =
    useFetch(userName);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  // ! Card Design State Variables

  const CardHeaderBannerRef = useRef(null);
  const CardHeaderBannerPreviewRef = useRef(null);

  const GitHubUserCardRef = useRef(null);
  const BannerGradientOneRef = useRef(null);
  const BannerGradientTwoRef = useRef(null);

  const OctIconRef = useRef(null);
  const LocationIconRef = useRef(null);
  const CompanyIconRef = useRef(null);
  const WebsiteIconRef = useRef(null);

  const [patternSelected, setSelectedPattern] = useState("JavaScript");

  const [bannerCardImageFile, setBannerCardImageFile] = useState(null);

  //--------------------------------------------->

  return (
    <GithubUserContext.Provider
      value={{
        userName,
        setUserName,
        dataUser,
        errorFetch,
        theme,
        setTheme,
        queryInput,
        setQueryInput,
        errorMessage,
        setErrorMessage,
        topRepos,
        remainingRequests,
        patternSelected,
        setSelectedPattern,
        bannerCardImageFile,
        setBannerCardImageFile,
        CardHeaderBannerRef,
        CardHeaderBannerPreviewRef,
        OctIconRef,
        LocationIconRef,
        CompanyIconRef,
        WebsiteIconRef,
        GitHubUserCardRef,
        BannerGradientOneRef,
        BannerGradientTwoRef,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
