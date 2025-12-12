import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { Values } from "@/components/about/values";

export const metadata = {
  title: "About Us - Southbroom Dental",
  description: "Learn about our practice, our team, and our commitment to providing exceptional dental care in Southbroom, South Africa.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
    </>
  );
}

