import { FormEvent, SetStateAction, useContext, useEffect } from "react";
import { Context } from "../../Context";

export default function Index() {
  const {
    setUserName,
    errorFetch,
    setErrorMessage,
    queryInput,
    setQueryInput,
  } = useContext(Context);

  const onChangeInput = (e: { target: { value: SetStateAction<string> } }) => {
    setQueryInput(e.target.value);
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
