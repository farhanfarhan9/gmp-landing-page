import Hero from "@/components/home/Hero";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import ProjectServices from "@/components/home/ProjectServices";
import OurParner from "@/components/home/OurParner";
import OurService from "@/components/home/OurService";
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {

  return (
    <>
    <div><Toaster/></div>
      <Hero />
      <OurService  />
      <ProjectMap />
      <ProjectServices />
      {/* <CompanyProfile /> */}
      <OurParner />
    </>
  );
}
