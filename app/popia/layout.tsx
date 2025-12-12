import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POPIA Compliance - Southbroom Dental",
  description: "Protection of Personal Information Act (POPIA) compliance information for Southbroom Dental.",
};

export default function POPIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
