import Image from "next/image";
import NavigationMenuDemo from "@/components/navigation-menu-01";
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <NavigationMenuDemo />
      <Hero />

    </div>
  );
}