
// app/page.tsx
"use client";
import Portifolio from "@/components/Portifolio";
import ProjectWork from "@/components/ProjectWork";
import Services from "@/components/Services";
import Top from "@/components/Top";
import { useState, useEffect } from "react";

export default function Home() {
  const titles = ['JOMAFA', 'TECHNOLOGY HOUSE', 'WE DO IT BETTER', 'SOFTWARES'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      document.title = titles[index]; // Update the tab title
    }, 3000); // Change title every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);
  return (
    <main className="overflow-hidden bg-gray-950 ">
      <Top/>
      <Services/>
      <Portifolio/>
      <ProjectWork/>
    </main> 
  );
}
