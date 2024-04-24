import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import OurParner from "@/components/home/OurParner";
import OurService from "@/components/home/OurService";

export default function HomePage() {

  return (
    <>
      <Hero />
      <Journey />
      <OurService  />
      <ProjectMap />
      <CompanyProfile />
      <OurParner />
    </>
  );
}
