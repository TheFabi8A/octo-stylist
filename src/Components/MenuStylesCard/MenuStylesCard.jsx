import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDownIcon, DownloadIcon } from "../Svg";
import { Index } from ".";
import { useContext } from "react";
import { GithubUserContext } from "@user-context";

export default function MenuStylesCard() {
  const { downloadCard, handleSetAccentColor, BackgroundsPatternsData } =
    Index();

  const { accentColor, setSelectedPattern, patternSelected } =
    useContext(GithubUserContext);

  return (
    <div className="mx-auto  mt-4 max-w-md rounded-2xl border-4 border-dashed p-4">
      <h3>Stylized Card</h3>
      <div className="flex flex-col justify-center">
        <label
          className="w-max cursor-pointer"
          htmlFor="bg-color-card"
          title="change background color card"
        >
          Accent Color:{" "}
          <input
            type="color"
            name="bg-color-card"
            id="bg-color-card"
            defaultValue={accentColor}
          />
        </label>
        <ButtonGroup>
          <Button variant="bordered" size="lg" color="success">
            {patternSelected}
          </Button>
          <Dropdown className="dark:bg-slate-800" placement="top-end">
            <DropdownTrigger>
              <Button color="success" isIconOnly size="lg">
                <ChevronDownIcon />
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
            >
              {BackgroundsPatternsData.map((techItem) => {
                const { Icon, technology } = techItem;

                return (
                  <DropdownItem
                    onClick={() => setSelectedPattern(technology)}
                    className="gap-4 text-black dark:text-white"
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
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="bordered" onClick={handleSetAccentColor}>
            Apply changes
          </Button>
          <Button
            size="lg"
            color="warning"
            variant="flat"
            onClick={downloadCard}
            endContent={
              <DownloadIcon
                style={{ fill: `${accentColor}` }}
                className="w-6"
              />
            }
          >
            Download Card
          </Button>
        </div>
      </div>
    </div>
  );
}
