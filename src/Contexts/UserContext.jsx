import { createContext, useState } from "react";

export const GithubUserContext = createContext();

import { ChildrenPropTypes } from "../PropTypes";
import useFetch from "../Hooks/useFetch";

UserContext.propTypes = {
  children: ChildrenPropTypes,
};

export default function UserContext({ children }) {
  const [userName, setUserName] = useState("thefabi8a");
  const { dataUser, errorFetch } = useFetch(userName);

  const [queryInput, setQueryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [theme, setTheme] = useState("dark" || "light");

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
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
