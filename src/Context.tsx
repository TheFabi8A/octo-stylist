import React from "react";
import { createContext, useEffect, useRef, useState } from "react";

type typeContext = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  dataUser: any;
  errorFetch: any;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  queryInput: string;
  setQueryInput: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  topRepos: Array<RepoItem>;
  remainingRequests: number | undefined;
  patternSelected: string;
  setSelectedPattern: React.Dispatch<React.SetStateAction<string>>;
  bannerCardImageFile: string;
  setBannerCardImageFile: React.Dispatch<React.SetStateAction<string>>;
  CardHeaderBannerRef: React.MutableRefObject<any>;
  CardHeaderBannerPreviewRef: React.MutableRefObject<any>;
  CompanyIconRef: React.MutableRefObject<any>;
  GitHubUserCardRef: React.MutableRefObject<any>;
  BannerGradientOneRef: React.MutableRefObject<any>;
  BannerGradientTwoRef: React.MutableRefObject<any>;
};
export const Context = createContext<typeContext>({
  userName: "",
  setUserName: () => {},
  dataUser: {},
  errorFetch: {},
  theme: "",
  setTheme: () => {},
  queryInput: "",
  setQueryInput: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  topRepos: [],
  remainingRequests: undefined,
  patternSelected: "",
  setSelectedPattern: () => {},
  bannerCardImageFile: "",
  setBannerCardImageFile: () => {},
  CardHeaderBannerRef: { current: null },
  CardHeaderBannerPreviewRef: { current: null },
  CompanyIconRef: { current: null },
  GitHubUserCardRef: { current: null },
  BannerGradientOneRef: { current: null },
  BannerGradientTwoRef: { current: null },
});

import useFetch, { RepoItem } from "./Hooks/useFetch";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const CardHeaderBannerRef = useRef(null);
  const CardHeaderBannerPreviewRef = useRef(null);

  const GitHubUserCardRef = useRef(null);
  const BannerGradientOneRef = useRef(null);
  const BannerGradientTwoRef = useRef(null);

  const CompanyIconRef = useRef(null);

  const [patternSelected, setSelectedPattern] = useState("JavaScript");

  const [bannerCardImageFile, setBannerCardImageFile] = useState("");

  return (
    <Context.Provider
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
        CompanyIconRef,
        GitHubUserCardRef,
        BannerGradientOneRef,
        BannerGradientTwoRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}
