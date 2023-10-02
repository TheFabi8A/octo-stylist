import BtnToggleTheme from "../Buttons/BtnToggleTheme";

export default function Header() {
  return (
    <>
      <header className="flex w-full items-center justify-between p-4 pb-0">
        <h1 className="text-3xl">devFinder</h1>
        <BtnToggleTheme />
      </header>
    </>
  );
}
