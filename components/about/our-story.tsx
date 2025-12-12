"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Southbroom Dental was established with a simple mission: to provide 
                exceptional dental care in a warm, welcoming environment. Located in 
                the beautiful coastal town of Southbroom, South Africa, we combine 
                professional expertise with a personal touch.
              </p>
              <p>
                Our practice has been serving the local community for over a decade, 
                building lasting relationships with our patients. We believe that 
                everyone deserves access to high-quality dental care, and we&apos;re 
                committed to making that a reality.
              </p>
              <p>
                With state-of-the-art equipment and a team of experienced professionals, 
                we offer comprehensive dental services ranging from routine cleanings 
                to advanced cosmetic and restorative procedures.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="border-2 border-[#2E86AB] shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg relative overflow-hidden">
                  <Image
                    src="/dental facility.jpg"
                    alt="Southbroom Dental Facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

