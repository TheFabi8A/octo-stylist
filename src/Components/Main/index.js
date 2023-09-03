import { useContext, useEffect } from "react";
import { GithubUserContext } from "@user-context";

export default function Index() {
  const {
    setUserName,
    dataUser,
    errorFetch,
    setErrorMessage,
    queryInput,
    setQueryInput,
  } = useContext(GithubUserContext);

  const { created_at, blog } = dataUser;

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
      setErrorMessage("You must enter a user to start the search");
    } else {
      setUserName(queryInput);
    }
  };

  const handleInputBlur = () => {
    setErrorMessage("");
  };

  const create_at_date = new Date(created_at);

  const day = create_at_date.getDate();
  const month = create_at_date.toLocaleString("default", { month: "short" });
  const year = create_at_date.getFullYear();

  const CREATE_AT = `Joined ${day} ${month} ${year}`;

  if (blog) {
    blog.replace(/^https?:\/\//, "");
  }

  const WEBSITE = blog;

  return {
    WEBSITE,
    handleInputBlur,
    handleSearchButton,
    onChangeInput,
    CREATE_AT,
  };
}
