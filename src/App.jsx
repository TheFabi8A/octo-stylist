import Application from "./Application";
import "./tailwind.css";

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Analytics />
      <Application />
    </>
  );
}
