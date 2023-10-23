import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { ChevronDownIcon, CloseIcon, DownloadIcon, UploadIcon } from "../Svg";

import { Index } from ".";

import { useContext } from "react";

import { GithubUserContext } from "@user-context";

import "./MenuStylesCard.css";

export default function MenuStylesCard() {
  const {
    handleDownloadCard,
    BackgroundsPatternsData,
    handleBannerCardChange,
    handleRangeChange,
    handleBannerImageDrop,
    uploadImageFailedMessage,
    handlePrimaryColorChange,
    handleSecondaryColorChange,
  } = Index();

  const {
    setSelectedPattern,
    patternSelected,
    setBannerCardImageFile,
    bannerCardImageFile,
    CardHeaderBannerPreviewRef,
  } = useContext(GithubUserContext);

  const pattern = BackgroundsPatternsData.find(
    (name) => name.technology === patternSelected,
  );

  const StrongColor = pattern ? pattern.StrongColor : null;

  const Icon = pattern ? pattern.Icon : null;

  return (
    <div className="w-screen max-w-md rounded-2xl border-4 border-dashed border-very-dark-blue-darker py-6 dark:border-white">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="mx-auto flex flex-col gap-4">
            <div className="mb-[2px] flex justify-center gap-10">
              <label
                className="flex w-max cursor-pointer flex-col items-center gap-4 self-center text-center text-xs"
                htmlFor="input-color-primary"
                title="change primary color"
              >
                Primary
                <input
                  className="input-color"
                  type="color"
                  name="input-color-primary"
                  id="input-color-primary"
                  defaultValue={"#ffff22"}
                  onChange={handlePrimaryColorChange}
                />
              </label>
              <label
                className="flex w-max cursor-pointer flex-col items-center gap-4 self-center text-center text-xs"
                htmlFor="input-color-secondary"
                title="change secondary color"
              >
                Secondary
                <input
                  className="input-color"
                  type="color"
                  name="input-color-secondary"
                  id="input-color-secondary"
                  defaultValue={"#ff22ff"}
                  onChange={handleSecondaryColorChange}
                />
              </label>
            </div>
          </div>
          <Divider className="my-6" />
          <div className="flex w-full flex-col">
            <label
              htmlFor="trigger-pattern"
              title="Change card banner."
              className="mx-auto flex w-max cursor-pointer flex-col items-center gap-2 text-center text-xs"
            >
              Select Technology Banner Pattern
              <ButtonGroup className="w-full">
                <Button
                  className="w-full text-black dark:text-white"
                  variant="bordered"
                  color="success"
                  style={{
                    borderColor: `${StrongColor}`,
                  }}
                  startContent={Icon && <Icon className="w-6" />}
                >
                  {patternSelected}
                </Button>
                <Dropdown className="dark:bg-slate-800" placement="top-end">
                  <DropdownTrigger>
                    <Button
                      isIconOnly
                      id="trigger-pattern"
                      className="trigger-patern"
                      title="View more patterns."
                      aria-label="View more patterns."
                      style={{ background: `${StrongColor}` }}
                    >
                      <ChevronDownIcon className="text-white dark:text-very-dark-blue-darker" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={[patternSelected]}
                    onSelectionChange={setSelectedPattern}
                    variant="bordered"
                    color="success"
                    aria-label="mostrar redes sociales"
                    itemClasses={{ wrapper: "dark:bg-slate-800" }}
                  >
                    {BackgroundsPatternsData.map((techItem) => {
                      const { Icon, technology } = techItem;

                      return (
                        <DropdownItem
                          onClick={() => setSelectedPattern(technology)}
                          className={`gap-4 text-black dark:text-white`}
                          key={technology}
                          aria-label={`Seleccionar pattern con diseño de ${technology}`}
                          startContent={<Icon className="w-6" />}
                        >
                          {technology}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
            </label>
            <p className="my-4 text-center">or</p>
            <div className="relative w-full">
              <label
                ref={CardHeaderBannerPreviewRef}
                htmlFor="banner-image-file"
                className="block h-32 w-full cursor-pointer"
                style={{
                  backgroundImage: `url(${bannerCardImageFile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrag={(e) => e.preventDefault()}
                onDrop={handleBannerImageDrop}
              >
                <input
                  className="hidden"
                  onChange={handleBannerCardChange}
                  type="file"
                  name="banner-image-file"
                  id="banner-image-file"
                  accept=".webp, .jpg, .png"
                />
                {!bannerCardImageFile && (
                  <>
                    <div
                      className={`flex h-full w-full flex-col items-center justify-center ${
                        uploadImageFailedMessage
                          ? "bg-red-500/25"
                          : "bg-yellow-500/25"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-4">
                        <p>Upload or Drop an image</p>
                        <UploadIcon className="w-6 fill-yellow-500" />
                      </div>
                      <em className="text-yellow-500">.webp, .jpg, .png</em>
                      {uploadImageFailedMessage && (
                        <em className="font-sm-bold text-red-500">
                          {uploadImageFailedMessage}
                        </em>
                      )}
                    </div>
                  </>
                )}
              </label>

              {bannerCardImageFile && (
                <>
                  <label
                    htmlFor="input-range-align-banner"
                    className="relative block w-full text-xs text-yellow-500"
                  >
                    <span className="relative left-3 top-2">
                      Vertical Banner Alignment
                    </span>
                    <span className="absolute -bottom-1 left-3 text-black dark:text-white">
                      Top
                    </span>
                    <span className="absolute -bottom-1 right-3 text-black dark:text-white">
                      Bottom
                    </span>
                    <Input
                      className="cursor-pointer"
                      classNames={{ input: "w-full accent-yellow-500" }}
                      id="input-range-align-banner"
                      type="range"
                      defaultValue={50}
                      min={0}
                      max={100}
                      onChange={handleRangeChange}
                    />
                  </label>
                  <Button
                    size="sm"
                    className="absolute left-2 top-2 bg-white"
                    variant="shadow"
                    onClick={() => setBannerCardImageFile(null)}
                    aria-label="Remove image"
                    isIconOnly
                  >
                    <CloseIcon className="w-4 fill-black" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <Divider className="my-6" />
        <div className="flex shrink-0 flex-wrap justify-center gap-4">
          <Button
            color="warning"
            variant="flat"
            onClick={handleDownloadCard}
            endContent={<DownloadIcon className="w-6 fill-yellow-500" />}
          >
            Download Card
          </Button>
        </div>
      </div>
    </div>
  );
}
