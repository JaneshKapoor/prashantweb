/* ============================================
   Main Page — Single-page composition
   Imports and composes all sections in narrative order.
   ============================================ */

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Mission from "@/components/sections/Mission";
import Perspectives from "@/components/sections/Perspectives";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      {/* WHO IS HE — First impression, mission headline */}
      <Hero />

      {/* BY THE NUMBERS — Quick impact metrics */}
      <Stats />

      {/* THE STORY — Personal narrative behind the platform */}
      <About />

      {/* THE JOURNEY — Career timeline from IIT to Tata 1mg */}
      <Timeline />

      {/* THE MISSION — What Tata 1mg stands for */}
      <Mission />

      {/* WHAT HE BELIEVES — Thought leadership & perspectives */}
      <Perspectives />

      {/* CONNECT — Reach out */}
      <Connect />

      {/* Footer */}
      <Footer />
    </main>
  );
}
