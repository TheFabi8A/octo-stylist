import { useEffect, useState } from "react";

interface typeGitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface RepoItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export default function useFetch(userName: any) {
  const [dataUser, setDataUser] = useState({} as typeGitHubUser);
  const [dataRepos, setDataRepos] = useState(Array<RepoItem>);
  const [topRepos, setTopRepos] = useState(Array<RepoItem>);
  const [errorFetch, setErrorFetch] = useState<Error | null>(null);
  const [remainingRequests, setRemainingsRequests] = useState(
    0 as number | undefined,
  );

  useEffect(() => {
    async function fetchData() {
      let remainingRequests = 0;
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${userName}`),
          fetch(`https://api.github.com/users/${userName}/repos?per_page=100`),
        ]);
        setRemainingsRequests(
          (remainingRequests = parseInt(
            userResponse.headers.get("X-RateLimit-Remaining") || "0",
          )),
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
          (a: { stargazers_count: number }, b: { stargazers_count: number }) =>
            b.stargazers_count - a.stargazers_count,
        );
        const topRepos = sortedRepos.slice(0, 10);

        setDataRepos(reposData);
        setTopRepos(topRepos);
      } catch (error) {
        setErrorFetch(error as Error);
      }
    }

    fetchData();
  }, [userName]);

  return { dataUser, errorFetch, dataRepos, topRepos, remainingRequests };
}
