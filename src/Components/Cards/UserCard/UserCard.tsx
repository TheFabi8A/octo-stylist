import { useContext } from "react";

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
} from "../../Icons";

import { Index } from ".";
import { Context } from "../../../Context";

export default function UserCard() {
  const {
    dataUser,
    theme,
    patternSelected,
    bannerCardImageFile,
    CardHeaderBannerRef,
    GitHubUserCardRef,
    BannerGradientOneRef,
    BannerGradientTwoRef,
  } = useContext(Context);

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
      ref={GitHubUserCardRef}
      className={`github-user-card w-screen max-w-md gap-4 bg-gradient-to-b from-transparent to-[#ffff22] transition-background`}
      style={{
        borderTop: `4px solid #ff22ff`,
        borderLeft: `4px solid #ff22ff`,
        borderBottom: `4px dashed #ffff22`,
        borderRight: `4px dashed #ffff22`,
      }}
    >
      <CardHeader
        // @ts-ignore
        ref={CardHeaderBannerRef}
        className="relative flex h-32 gap-7 rounded-sm p-0"
        style={
          bannerCardImageFile
            ? {
                backgroundImage: `url(${bannerCardImageFile})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                background: `
            url(assets/svg/technologies/${patternSelected}-15deg.svg) 2% 5% / 10% no-repeat,
            url(assets/svg/technologies/${patternSelected}.svg) 15% 10% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}_10deg.svg) 25% 10% / 15% no-repeat,
            url(assets/svg/technologies/${patternSelected}-15deg.svg) 40% 75% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}.svg) center bottom / 10% no-repeat,
            url(assets/svg/technologies/${patternSelected}.svg) 45% 20% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}-15deg.svg) 57.5% 50% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}.svg) 75% 10% / 20% no-repeat,
            url(assets/svg/technologies/${patternSelected}.svg) 85% 15% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}_10deg.svg) 97.5% 15% / 7.5% no-repeat,
            url(assets/svg/technologies/${patternSelected}-15deg.svg) 97.5% 92.5% / 15% no-repeat
            `,
              }
        }
      >
        <span
          ref={BannerGradientOneRef}
          className="absolute left-0 top-0 h-full w-full"
          style={
            bannerCardImageFile
              ? {}
              : {
                  background: `radial-gradient(circle 200px at left, transparent, #ffff222f, transparent)`,
                }
          }
        />
        <span
          ref={BannerGradientTwoRef}
          className="absolute left-0 top-0 h-full w-full"
          style={
            bannerCardImageFile
              ? {}
              : {
                  background: `radial-gradient(circle 200px at left, transparent, transparent, #ff22ff2f)`,
                }
          }
        />
        <Badge
          placement="bottom-right"
          className="-bottom-9 -right-2 h-8 w-8 border-none"
          content={
            <Button
              className="bg-transparent"
              radius="full"
              as={Link}
              isIconOnly
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              title="Go to GitHub Profile"
            >
              <OctIcon className="w-7" />
            </Button>
          }
        >
          <Avatar
            className="relative left-5 top-12 h-24 w-24 shrink-0"
            isBordered
            src={avatar_url}
          />
        </Badge>
      </CardHeader>
      <div
        className={`relative right-4 flex self-end rounded-md bg-white/50 dark:bg-black/50`}
      >
        <Popover
          className="rounded-md"
          style={{ borderRadius: "0" }}
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
            <Button
              title="Public Repositories"
              className="rounded-none bg-transparent"
              isIconOnly
            >
              <RepoIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
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
          className="rounded-md"
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
            <Button
              title="Followers"
              className="rounded-none bg-transparent"
              isIconOnly
            >
              <PeopleIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
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
          className="rounded-md"
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
            <Button
              title="Following"
              className="rounded-none bg-transparent"
              isIconOnly
            >
              <PersonIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
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
      <CardBody className="relative left-4 w-[calc(100%-32px)] rounded-md bg-white/50 backdrop-blur-sm transition-background dark:bg-black/50">
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
            <OctIcon className="w-4 fill-black dark:fill-white" />
            <p className="text-md capitalize leading-4">{CREATE_AT}</p>
          </div>
        </div>
        <Divider className="my-4" />
        <ul className="flex flex-col gap-2 text-sm">
          {location && (
            <li className="flex items-center gap-2">
              <LocationIcon className="w-4 fill-black dark:fill-white" />
              <p className="text-balance">{location}</p>
            </li>
          )}
          {company && (
            <li className="flex items-center gap-2">
              <CompanyIcon className="w-4 fill-black dark:fill-white" />
              {company}
            </li>
          )}
          {blog && (
            <li className="flex items-center gap-2">
              <WebsiteIcon className="w-4 fill-black dark:fill-white" />
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
      <Divider className="relative left-4 w-[calc(100%-32px)]" />
      <CardFooter className="overflow-visible px-4 pb-4 pt-0">
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
            variant="solid"
            as={Link}
            className="flex items-center justify-between gap-2 break-words rounded-md bg-white/50 p-2 dark:bg-black/50"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex w-[calc(100%_-_27px)] items-center gap-2">
              <OctIcon
                className={`w-4 shrink-0 ${
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
