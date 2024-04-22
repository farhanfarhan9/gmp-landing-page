"use client";
import Hero from "@/components/home/Hero";
import { useSearchParams } from "next/navigation";
import Journey from "@/components/home/Journey";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import OurParner from "@/components/home/OurParner";
import OurService from "@/components/home/OurService";

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <>
      <Hero />
      <Journey />
      <OurService />
      <ProjectMap />
      <CompanyProfile />
      <OurParner />
    </>
  );
}
