import { Button, Link } from "@nextui-org/react";
import { OctIcon } from "../Svg";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-col justify-center py-4">
        <p className="text-center">
          {new Date().getFullYear()} &copy; Fabian Ochoa
        </p>
        <Button
          as={Link}
          href="https://github.com/TheFabi8A/github-user-search-app"
          target="blank"
          variant="bordered"
          startContent={
            <OctIcon className="w-4 fill-blue transition-colors dark:fill-white" />
          }
          className="self-center border-blue text-blue transition-colors dark:text-white"
        >
          Github User Search App
        </Button>
      </footer>
    </>
  );
}
