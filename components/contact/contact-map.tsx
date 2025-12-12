"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

export function ContactMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Find Us</h2>
        <Card className="border-2 border-[#2E86AB] shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4216.353456054605!2d30.321992776325928!3d-30.91458117449704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e58b1e895ac5a0b%3A0x8160406db0088d7d!2sSouthbroom%20dental!5e1!3m2!1sen!2sza!4v1765560119582!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Southbroom Dental Location"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-beach-soft-blue/20 to-white">
              <p className="text-sm text-muted-foreground text-center mb-4">
                <strong className="text-foreground">Address:</strong> 186 Beach Rd, Southbroom, Margate, 4277, South Africa
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-beach-ocean hover:bg-beach-ocean/90 text-white"
                  size="lg"
                >
                  <a
                    href="https://www.google.com/maps/place/Southbroom+dental/@-30.9145812,30.3219928,17z/data=!4m6!3m5!1s0x1e58b1e895ac5a0b:0x8160406db0088d7d!8m2!3d-30.9145812!4d30.3219928!16s%2Fg%2F11c5q8v5qj?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
