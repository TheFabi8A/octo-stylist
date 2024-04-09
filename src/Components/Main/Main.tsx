import { useContext } from "react";

import { Input, Button, Progress } from "@nextui-org/react";

import { SearchIcon } from "../Icons";

import Index from ".";

import { UserCard } from "../Cards/UserCard";
import { RepoCard } from "../Cards/RepoCards";

import { MenuStylesCard } from "../MenuStylesCard";
import { Context } from "../../Context";

export default function Main() {
  const { queryInput, setQueryInput, remainingRequests, errorMessage } =
    useContext(Context);

  const { handleInputBlur, onChangeInput, handleSearchButton } = Index();

  return (
    <main className="mx-auto max-w-[1440px] p-4">
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
      {remainingRequests && remainingRequests > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-4 py-10 ">
            <UserCard />
            <MenuStylesCard />
          </div>
          <section className="mt-4 flex flex-wrap justify-center gap-4">
            <RepoCard />
          </section>
        </>
      ) : (
        <div className="min-h-[calc(100dvh_-_200px)]" />
      )}
    </main>
  );
}
