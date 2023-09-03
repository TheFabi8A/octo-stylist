import { useEffect, useState } from "react";

export default function useFetch(userName) {
  const [dataUser, setDataUser] = useState([]);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((dataUser) => setDataUser(dataUser))
      .catch((error) => setErrorFetch(error));
  }, [userName]);
  console.log(dataUser);
  return { dataUser, errorFetch };
}
