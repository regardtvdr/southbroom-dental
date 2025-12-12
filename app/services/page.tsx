import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { OurBestWork } from "@/components/about/our-best-work";

export const metadata = {
  title: "Our Services - Southbroom Dental",
  description: "Comprehensive dental services including general care, crowns, fillings, dentures, orthodontics, and teeth cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <OurBestWork />
    </>
  );
}
