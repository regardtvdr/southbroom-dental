"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 beachy-gradient opacity-90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch with us today and take the first step towards a healthier, 
            more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-beach-ocean hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-beach-ocean bg-white hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link href="tel:+27393166145" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

