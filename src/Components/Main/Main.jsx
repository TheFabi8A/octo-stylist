import { useContext } from "react";

import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Badge,
  Divider,
} from "@nextui-org/react";

import {
  ArrowIcon,
  CompanyIcon,
  LocationIcon,
  OctIcon,
  SearchIcon,
  TwitterIcon,
  WebsiteIcon,
} from "../Svg";

import { GithubUserContext } from "@user-context";

import Index from ".";

export default function Main() {
  const { theme, dataUser, queryInput, setQueryInput, errorMessage } =
    useContext(GithubUserContext);

  const {
    login,
    name,
    avatar_url,
    followers,
    following,
    public_repos,
    bio,
    twitter_username,
    company,
    location,
    html_url,
    blog,
  } = dataUser;

  const {
    handleInputBlur,
    onChangeInput,
    handleSearchButton,
    CREATE_AT,
    WEBSITE,
  } = Index();

  return (
    <main className="w-full max-w-lg p-4 md:w-[500px]">
      <div className="mb-4 flex items-center gap-4">
        <Input
          onBlur={handleInputBlur}
          variant="underlined"
          onChange={onChangeInput}
          value={queryInput}
          label="Search Github Username."
          isClearable
          onClear={() => setQueryInput("")}
          radius="sm"
          startContent={
            <SearchIcon className="pointer-events-none flex-shrink-0" />
          }
          errorMessage={errorMessage}
        />
        <Button variant="bordered" onClick={handleSearchButton}>
          Search
        </Button>
      </div>
      <section className="rounded-2xl bg-gradient-to-t from-light-blue to-white p-1">
        <Card className="gap-4 bg-gradient-to-t from-light-blue to-white p-4 dark:from-dark-blue-darker dark:to-very-dark-blue-darker">
          <CardHeader className="mb-1 flex gap-7 py-0">
            <Badge
              placement="bottom-right"
              className="h-10 w-10"
              content={
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  <OctIcon
                    width="32"
                    height="32"
                    className={`${
                      theme === "dark" ? "fill-black" : "fill-white"
                    }`}
                  />
                </a>
              }
              color="default"
            >
              <Avatar
                className="h-24 w-24 rounded-md"
                isBordered
                src={avatar_url}
              />
            </Badge>
            <div className="flex flex-col">
              <h2 className="text-lg">{name}</h2>
              <strong className="decoration underline decoration-light-blue decoration-wavy dark:decoration-white">
                @{login}
              </strong>
              <p>{CREATE_AT}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="rounded-md bg-white/25 backdrop-blur-sm dark:bg-black/25">
            {bio ? (
              <>
                <div className="flex items-center overflow-hidden">
                  <h3 className="mr-4 inline font-sm-bold text-2xl capitalize">
                    bio
                  </h3>
                  <Divider />
                </div>
                <p>{bio}</p>
              </>
            ) : (
              <p>This profile has no bio</p>
            )}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-md bg-white p-4 dark:bg-dark-blue-darker">
              <div>
                <h3>Repos</h3>
                <em className="font-sm-bold">{public_repos}</em>
              </div>
              <Divider orientation="vertical" />
              <div>
                <h3>Followers</h3>
                <em className="font-sm-bold">{followers}</em>
              </div>
              <Divider orientation="vertical" />
              <div>
                <h3>Following</h3>
                <em className="font-sm-bold">{following}</em>
              </div>
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {location && (
                <li className="flex items-center gap-2">
                  <span>
                    <LocationIcon />
                  </span>
                  {location}
                </li>
              )}
              {company && (
                <li className="flex items-center gap-2">
                  <span>
                    <CompanyIcon />
                  </span>
                  {company}
                </li>
              )}
              {blog && (
                <li className="flex items-center gap-2">
                  <span>
                    <WebsiteIcon />
                  </span>
                  <a
                    className="underline"
                    href={blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WEBSITE}
                  </a>
                </li>
              )}
            </ul>
          </CardBody>
          <Divider />
          <CardFooter className="overflow-visible p-0">
            <div className="grid w-full grid-cols-2 gap-4">
              {twitter_username && (
                <a
                  className="flex items-center justify-between gap-2 break-words rounded-md border p-2"
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex w-[calc(100%_-_27px)] items-center gap-2">
                    <TwitterIcon
                      className={`shrink-0 ${
                        theme === "dark" ? "fill-white" : "fill-black"
                      }`}
                    />
                    <p className="overflow-hidden truncate text-ellipsis">
                      {twitter_username}
                    </p>
                  </span>
                  <ArrowIcon
                    className={`shrink-0 rotate-45 ${
                      theme === "dark" ? "fill-white" : "fill-black"
                    }`}
                  />
                </a>
              )}
              <a
                className="flex items-center justify-between gap-2 break-words rounded-md border p-2"
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex w-[calc(100%_-_27px)] items-center gap-2">
                  <OctIcon
                    width="20"
                    height="20"
                    className={`shrink-0 ${
                      theme === "dark" ? "fill-white" : "fill-black"
                    }`}
                  />
                  <p className="overflow-hidden truncate text-ellipsis">
                    {login}
                  </p>
                </span>
                <ArrowIcon
                  className={`shrink-0 rotate-45 ${
                    theme === "dark" ? "fill-white" : "fill-black"
                  }`}
                />
              </a>
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
