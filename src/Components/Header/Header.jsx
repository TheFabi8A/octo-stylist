import BtnToggleTheme from "../Buttons/BtnToggleTheme";

export default function Header() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-2">
          <img
            width={40}
            height={40}
            src="assets/images/Octo-Stylist-Icon-Pixelart.png"
            alt="3D Logo GitHub"
          />
          <h1 className="text-3xl">Octo Stylist</h1>
        </div>
        <BtnToggleTheme />
      </header>
    </>
  );
}
