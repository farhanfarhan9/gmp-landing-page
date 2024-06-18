import Hero from "@/components/home/Hero";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import ProjectServices from "@/components/home/ProjectServices";
import Principle from "@/components/home/Principle";
import Outlets from "@/components/home/Outlets";
import SalesProductivity from "@/components/home/SalesProductivity";
import InfrastructureWarehouse from "@/components/home/InfrastructureWarehouse";
import InfrastructureIt from "@/components/home/InfrastructureIt";
import WarehouseFacility from "@/components/home/WarehouseFacility";
import OurParner from "@/components/home/OurParner";
import TotalEmployee from "@/components/home/TotalEmployee";
import AwardAchievement from "@/components/home/AwardAchievement";
import Partners from "@/components/home/Partners";
import OurService from "@/components/home/OurService";
import toast, { Toaster } from 'react-hot-toast';
import Maps from "@/components/home/Maps";

export default function HomePage() {

  return (
    <>
    <div><Toaster/></div>
      <Hero />
      <OurService  />
      <ProjectMap />
      <ProjectServices />
      <Principle />
      <Outlets />
      <SalesProductivity />
      <InfrastructureWarehouse />
      <InfrastructureIt />
      <WarehouseFacility />
      <TotalEmployee />
      <AwardAchievement />
      <Partners />
      <Maps/>
    </>
  );
}
