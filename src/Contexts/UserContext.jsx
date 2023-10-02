import { createContext, useEffect, useState } from "react";

export const GithubUserContext = createContext();

import { ChildrenPropTypes } from "../PropTypes";
import useFetch from "../Hooks/useFetch";

UserContext.propTypes = {
  children: ChildrenPropTypes,
};

export default function UserContext({ children }) {
  const [theme, setTheme] = useState("dark" || "light");

  const [patternSelected, setSelectedPattern] = useState("Python");
  console.log(patternSelected);

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "thefabi8a",
  );

  const [accentColor, setAccentColor] = useState("#ff22ff");

  const { dataUser, errorFetch, topRepos, remainingRequests } =
    useFetch(userName);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const [queryInput, setQueryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        accentColor,
        setAccentColor,
        patternSelected,
        setSelectedPattern,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
