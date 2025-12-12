import { TeamHero } from "@/components/team/team-hero";
import { TeamMembers } from "@/components/team/team-members";

export const metadata = {
  title: "Our Team - Southbroom Dental",
  description: "Meet our experienced team of dental professionals dedicated to your oral health.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
    </>
  );
}

