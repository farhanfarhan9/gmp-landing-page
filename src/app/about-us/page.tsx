import AboutHead from "@/components/aboutus/AboutHead";
import Advantages from "@/components/aboutus/Advantages";
import CompanyJourney from "@/components/aboutus/CompanyJourney";
import CompanyJourneyMobile from "@/components/aboutus/CompanyJourneyMobile";
import TeamProfile from "@/components/aboutus/TeamProfile";

function AboutUs() {
  return (
    <div>
      <AboutHead />
      <Advantages />
      {/* <CompanyJourney /> */}

      <div className="hidden md:block">
        <CompanyJourney />
      </div>
      <div className="block md:hidden">
        <CompanyJourneyMobile />
      </div>

      <TeamProfile />
    </div>
  );
}

export default AboutUs;
