import { useEffect, useState } from "react";

export default function useFetch(userName) {
  const [dataUser, setDataUser] = useState([]);
  const [dataRepos, setDataRepos] = useState([]);
  const [topRepos, setTopRepos] = useState([]);
  const [errorFetch, setErrorFetch] = useState(null);
  const [remainingRequests, setRemainingsRequests] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${userName}`),
          fetch(`https://api.github.com/users/${userName}/repos?per_page=100`),
        ]);
        setRemainingsRequests(
          userResponse.headers.get("X-RateLimit-Remaining"),
        );

        if (userResponse.status === 404) {
          throw new Error("User not found.");
        } else if (userResponse.status === 403) {
          throw new Error(
            "You have exceeded the limit of requests, please try again later.",
          );
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setDataUser(userData);

        const sortedRepos = reposData.sort(
          (a, b) => b.stargazers_count - a.stargazers_count,
        );
        const topRepos = sortedRepos.slice(0, 10);

        setDataRepos(reposData);
        setTopRepos(topRepos);
      } catch (error) {
        setErrorFetch(error);
      }
    }

    fetchData();
  }, [userName]);

  return { dataUser, errorFetch, dataRepos, topRepos, remainingRequests };
}
