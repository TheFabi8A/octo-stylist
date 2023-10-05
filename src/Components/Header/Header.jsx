import BtnToggleTheme from "../Buttons/BtnToggleTheme";

export default function Header() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-2">
          <img
            className="w-10"
            src="assets/images/3d-fluency-github-logo.webp"
            alt="3D Logo GitHub"
          />
          <h1 className="text-3xl">Octo Stylist</h1>
        </div>
        <BtnToggleTheme />
      </header>
    </>
  );
}
