import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Badgy } from "./components/Badgy";
import { HowIBuild } from "./components/HowIBuild";
import { Learning } from "./components/Learning";
import { Future } from "./components/Future";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Badgy />
      <Divider />
      <HowIBuild />
      <Divider />
      <Learning />
      <Divider />
      <Future />
      <Divider />
      <Stack />
      <Contact />
    </main>
  );
}

function Divider() {
  return (
    <div
      aria-hidden
      className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/8 to-transparent"
    />
  );
}
