
import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    
        <Hero />
        <Courses/>
        <Contact/>
        <About/>

    </main>
  );
}
