import { useContext } from "react";

import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Chip,
  Link,
  Progress,
} from "@nextui-org/react";

import {
  BranchIcon,
  ForkIcon,
  IssueIcon,
  LawIcon,
  SearchIcon,
  StarIcon,
} from "../Svg";

import { GithubUserContext } from "@user-context";

import Index from ".";
import { UserCard } from "../Cards/UserCard";
import { MenuStylesCard } from "../MenuStylesCard";

export default function Main() {
  const {
    dataUser,
    queryInput,
    setQueryInput,
    topRepos,
    remainingRequests,
    errorMessage,
  } = useContext(GithubUserContext);

  const { avatar_url } = dataUser;

  const { handleInputBlur, onChangeInput, handleSearchButton } = Index();

  return (
    <main className="p-4">
      <div className="mx-auto max-w-md">
        <Progress
          maxValue={60}
          classNames={{
            base: "w-full",
            track:
              "bg-white transition-colors dark:bg-very-dark-blue-darker border border-2 border-blue",
            indicator: "!bg-blue",
            label: "transition-colors",
            labelWrapper: "",
            value: "transition-colors",
          }}
          isStriped
          value={remainingRequests}
          label="Remaining Requests"
          size="md"
          aria-label="Remaining requests..."
          showValueLabel
          formatOptions={{ style: "decimal" }}
        />
        <div className="mb-4 flex w-full items-center justify-between gap-4 pb-4">
          <Input
            color="warning"
            classNames={{
              clearButton: "text-blue",
              errorMessage: "text-red-500 !absolute !left-0 !p-0",
            }}
            onBlur={handleInputBlur}
            variant="underlined"
            onChange={onChangeInput}
            value={queryInput}
            label="Search Github Username."
            isClearable
            onClear={() => setQueryInput("")}
            radius="sm"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-blue" />
            }
            errorMessage={errorMessage}
          />
          <Button
            color="warning"
            variant="bordered"
            onClick={handleSearchButton}
            className="text-blue dark:text-white"
          >
            Search
          </Button>
        </div>
      </div>
      {remainingRequests > 0 && (
        <>
          <section className="mt-10 max-w-md rounded-2xl md:mx-auto">
            <UserCard />
          </section>
          <MenuStylesCard />
          <section className="mt-4 flex flex-wrap justify-center gap-4">
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
                    className="min-h-full w-full max-w-md select-none bg-very-light-blue dark:bg-dark-blue-darker dark:text-white"
                  >
                    <CardHeader className="items-center gap-4">
                      <Avatar
                        title="Owner's avatar"
                        src={avatar_url}
                        size="sm"
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
          </section>
        </>
      )}
    </main>
  );
}
