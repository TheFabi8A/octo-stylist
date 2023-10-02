import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import {
  ArrowIcon,
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  OctIcon,
  RepoIcon,
  PeopleIcon,
  PersonIcon,
} from "../../Svg";
import { useContext } from "react";
import { GithubUserContext } from "@user-context";
import { Index } from ".";

export default function UserCard() {
  const { dataUser, theme, accentColor, patternSelected } =
    useContext(GithubUserContext);

  const { CREATE_AT, WEBSITE } = Index();

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

  return (
    <Card
      className={`github-user-card gap-4 border-4 border-white p-4 transition-background`}
      style={{
        background: `linear-gradient(to bottom, ${
          theme === "dark" ? "#141d2e" : "#fff"
        }, ${accentColor})`,
      }}
    >
      <CardHeader
        className="flex gap-7 rounded-sm p-0"
        style={{
          boxShadow: `inset 0px 5px 10px 2.5px ${
            theme === "dark" ? "#141d2e" : "#fff"
          }, inset 2px 2px 10px 0px ${accentColor}`,
          background: `
          url(assets/svg/${patternSelected}.svg) 75% 10% / 20% no-repeat,
          url(assets/svg/${patternSelected}.svg) bottom right / 15% no-repeat,
          url(assets/svg/${patternSelected}.svg) 25% 10% / 15% no-repeat,
          url(assets/svg/${patternSelected}.svg) 2% 5% / 10% no-repeat,
          url(assets/svg/${patternSelected}.svg) center bottom / 10% no-repeat,
          url(assets/svg/${patternSelected}.svg) 15% 10% / 7.5% no-repeat,
          url(assets/svg/${patternSelected}.svg) 40% 75% / 7.5% no-repeat,
          url(assets/svg/${patternSelected}.svg) 40% 75% / 7.5% no-repeat,
          url(assets/svg/${patternSelected}.svg) 45% 20% / 7.5% no-repeat,
          url(assets/svg/${patternSelected}.svg) 97.5% 15% / 7.5% no-repeat,
          url(assets/svg/${patternSelected}.svg) 85% 15% / 7.5% no-repeat,
          radial-gradient(circle 200px at left, transparent, ${accentColor}2f, ${
            patternSelected === "JavaScript"
              ? "#FFFF002F"
              : patternSelected === "Python"
              ? "#0277BD2F"
              : patternSelected === "React"
              ? "#80DEEA2F"
              : patternSelected === "VSCode"
              ? "#0277BD2F"
              : "#fff"
          }),
          linear-gradient(to bottom left, ${accentColor}2f, ${
            theme === "dark" ? "#141d2e" : "#fff"
          }, ${
            patternSelected === "JavaScript"
              ? "#FFFF002F"
              : patternSelected === "Python"
              ? "#0277BD2F"
              : patternSelected === "React"
              ? "#80DEEA2F"
              : patternSelected === "VSCode"
              ? "#0277BD2F"
              : "#fff"
          })
          `,
          transition: "background 500ms ease-in-out",
        }}
      >
        <Badge
          placement="bottom-right"
          className="-bottom-10 h-8 w-8 border-none"
          content={
            <Button
              className="bg-transparent"
              radius="full"
              as={Link}
              isIconOnly
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OctIcon
                className={`w-7 ${
                  theme === "dark" ? "fill-black" : "fill-white"
                }`}
              />
            </Button>
          }
        >
          <Avatar
            className="relative left-1 top-12 h-24 w-24 shrink-0"
            isBordered
            src={avatar_url}
          />
        </Badge>
      </CardHeader>
      <div className={`flex self-end rounded-xl bg-white/50 dark:bg-black/50`}>
        <Popover
          style={{ color: `${accentColor}` }}
          classNames={
            theme === "dark"
              ? {
                  base: "bg-very-dark-blue-darker",
                  arrow: "bg-very-dark-blue-darker",
                }
              : {
                  base: "bg-white",
                  arrow: "bg-white",
                }
          }
          placement="bottom"
          showArrow={true}
        >
          <PopoverTrigger>
            <Button className="rounded-r-none bg-transparent" isIconOnly>
              <RepoIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs font-bold">
                <p>
                  Public Repositories:{" "}
                  <span className="text-black dark:text-white">
                    {public_repos}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover
          style={{ color: `${accentColor}` }}
          classNames={
            theme === "dark"
              ? {
                  base: "bg-very-dark-blue-darker",
                  arrow: "bg-very-dark-blue-darker",
                }
              : {
                  base: "bg-white",
                  arrow: "bg-white",
                }
          }
          placement="bottom"
          showArrow={true}
        >
          <PopoverTrigger>
            <Button className="rounded-none bg-transparent" isIconOnly>
              <PeopleIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs font-bold">
                <p>
                  Followers:{" "}
                  <span className="text-black dark:text-white">
                    {followers}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover
          style={{ color: `${accentColor}` }}
          classNames={
            theme === "dark"
              ? {
                  base: "bg-very-dark-blue-darker",
                  arrow: "bg-very-dark-blue-darker",
                }
              : {
                  base: "bg-white",
                  arrow: "bg-white",
                }
          }
          placement="bottom"
          showArrow={true}
        >
          <PopoverTrigger>
            <Button className="rounded-l-none bg-transparent" isIconOnly>
              <PersonIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs font-bold">
                <p>
                  Following:{" "}
                  <span className="text-black dark:text-white">
                    {following}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <CardBody className="rounded-md bg-white/50 backdrop-blur-sm transition-background dark:bg-black/50">
        <div className="flex flex-col">
          <h2 className="font-sm-bold text-lg">{name}</h2>
          <strong>{login}</strong>
        </div>
        <Divider className="my-4" />
        {bio && (
          <>
            <div className="flex items-center overflow-hidden">
              <h3 className="text-md mb-2 font-sm-bold font-black capitalize">
                ABOUT ME
              </h3>
            </div>
            <p className="text-balance">{bio}</p>
          </>
        )}
        <div className="mt-2">
          <h3 className="mb-2 font-black">MEMBER SINCE</h3>
          <div className="flex items-center gap-2">
            <OctIcon className="h-4" style={{ fill: `${accentColor}` }} />
            <p className="text-md capitalize leading-4">{CREATE_AT}</p>
          </div>
        </div>
        <Divider className="my-4" />
        <ul className="flex flex-col gap-2 text-sm">
          {location && (
            <li className="flex items-center gap-2">
              <span>
                <LocationIcon style={{ fill: `${accentColor}` }} />
              </span>
              <p className="text-balance">{location}</p>
            </li>
          )}
          {company && (
            <li className="flex items-center gap-2">
              <CompanyIcon style={{ fill: `${accentColor}` }} />
              {company}
            </li>
          )}
          {blog && (
            <li className="flex items-center gap-2">
              <WebsiteIcon style={{ fill: `${accentColor}` }} />
              <Link
                isExternal
                showAnchorIcon
                className="text-sm dark:text-white"
                underline="hover"
                href={blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WEBSITE}
              </Link>
            </li>
          )}
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="overflow-visible p-0">
        <div className="grid w-full grid-cols-2 gap-4">
          {twitter_username && (
            <Button
              as={Link}
              className="flex items-center justify-between gap-2 break-words rounded-md bg-white/50 p-2 dark:bg-black/50"
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
            </Button>
          )}
          <Button
            as={Link}
            className="flex items-center justify-between gap-2 break-words rounded-md bg-white/50 p-2 dark:bg-black/50"
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
              <p className="overflow-hidden truncate text-ellipsis">{login}</p>
            </span>
            <ArrowIcon
              className={`shrink-0 rotate-45 ${
                theme === "dark" ? "fill-white" : "fill-black"
              }`}
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
