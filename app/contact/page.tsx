import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";

export const metadata = {
  title: "Contact Us - Southbroom Dental",
  description: "Get in touch with Southbroom Dental. We're here to help with all your dental care needs.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </>
  );
}

