import { useContext, useEffect } from "react";
import { GithubUserContext } from "@user-context";

export default function Index() {
  const {
    setUserName,
    errorFetch,
    setErrorMessage,
    queryInput,
    setQueryInput,
  } = useContext(GithubUserContext);

  const onChangeInput = (event) => {
    setQueryInput(event.target.value);
  };

  useEffect(() => {
    if (errorFetch) {
      setErrorMessage(errorFetch.message);
    }
  }, [errorFetch, setErrorMessage]);

  const handleSearchButton = () => {
    if (queryInput.length === 0) {
      setErrorMessage("You must enter a user to start the search.");
    } else {
      setUserName(queryInput);
    }
  };

  const handleInputBlur = () => {
    setErrorMessage("");
  };

  return {
    handleInputBlur,
    handleSearchButton,
    onChangeInput,
  };
}
