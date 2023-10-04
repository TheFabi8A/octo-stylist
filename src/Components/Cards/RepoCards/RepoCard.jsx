import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Chip,
  Link,
} from "@nextui-org/react";

import { BranchIcon, ForkIcon, IssueIcon, LawIcon, StarIcon } from "../../Svg";

import { useContext } from "react";
import { GithubUserContext } from "@user-context";

export default function RepoCard() {
  const { dataUser, topRepos } = useContext(GithubUserContext);

  const { avatar_url } = dataUser;

  return (
    <>
      {Array.isArray(topRepos) &&
        topRepos.map(
          ({
            id,
            name,
            full_name,
            license,
            stargazers_count,
            topics,
            forks_count,
            default_branch,
            description,
            open_issues_count,
            html_url,
          }) => (
            <Card
              isPressable
              disableRipple
              key={id}
              className="min-h-[200px] w-full max-w-md select-none bg-very-light-blue dark:bg-dark-blue-darker dark:text-white"
            >
              <CardHeader className="items-center gap-4">
                <Avatar
                  title="Owner's avatar"
                  src={avatar_url}
                  className="ml-[6px] shrink-0"
                  isBordered
                />
                <div className="flex flex-col">
                  <div>
                    <Link
                      aria-label={`Go to ${name} repository`}
                      className="flex items-center text-left hover:underline hover:decoration-yellow-500 hover:decoration-wavy dark:text-white"
                      href={html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      isExternal
                      showAnchorIcon
                    >
                      {full_name}
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 fill-yellow-500" />
                      <p>{stargazers_count}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <ForkIcon className="w-4 fill-yellow-500" />
                      <p>{forks_count}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <BranchIcon className="w-4 fill-yellow-500" />
                      <p>{default_branch}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <IssueIcon className="w-4 fill-yellow-500" />
                      <p>{open_issues_count}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {topics.length > 0 || description ? (
                <CardBody>
                  {description && (
                    <p className="text-balance mb-4">{description}</p>
                  )}
                  {topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <Chip
                          size="sm"
                          className="border-blue"
                          variant="bordered"
                          key={topic}
                        >
                          <span className="mr-1 text-blue">#</span>
                          {topic}
                        </Chip>
                      ))}
                    </div>
                  )}
                </CardBody>
              ) : null}
              {license && (
                <CardFooter>
                  {license && (
                    <>
                      <div className="flex items-center gap-2 text-blue dark:text-white">
                        <LawIcon className="w-5 fill-blue dark:fill-blue" />
                        <p>{license.name}</p>
                      </div>
                    </>
                  )}
                </CardFooter>
              )}
            </Card>
          ),
        )}
    </>
  );
}
