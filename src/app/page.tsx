import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import ProjectMap from "@/components/home/ProjectMap";
import CompanyProfile from "@/components/home/CompanyProfile";
import OurParner from "@/components/home/OurParner";
import OurService from "@/components/home/OurService";

export default function HomePage({ searchParams }: { searchParams: any }) {
  const lang = searchParams.lang ?? undefined;

  return (
    <>
      <Hero />
      <Journey lang={lang} />
      <OurService lang={lang} />
      <ProjectMap />
      <CompanyProfile lang={lang} />
      <OurParner lang={lang} />
    </>
  );
}
