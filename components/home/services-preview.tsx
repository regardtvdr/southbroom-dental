"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Smile, Sparkles, ArrowLeftRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    color: "from-beach-blue to-beach-teal",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, and aesthetic procedures.",
    color: "from-beach-teal to-beach-blue",
  },
  {
    icon: ArrowLeftRight,
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces and clear aligner solutions.",
    color: "from-beach-ocean to-beach-teal",
  },
  {
    icon: Heart,
    title: "Dental Implants",
    description: "Restore your smile with permanent, natural-looking dental implant solutions.",
    color: "from-beach-teal to-beach-ocean",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          "text-[#2E86AB]",
        )}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-[#2E86AB] hover:border-[#2E86AB] group">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

