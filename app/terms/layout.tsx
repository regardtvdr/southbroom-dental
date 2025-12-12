import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Southbroom Dental",
  description: "Terms of Service for Southbroom Dental practice.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
