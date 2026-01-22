"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { 
  Users, 
  Award, 
  ArrowRight, 
  Heart, 
  Circle, 
  Sparkles,
  CheckCircle2,
  Anchor
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "general",
    icon: Users,
    title: "General Family & Child Care",
    description: "Comprehensive dental care for patients of all ages, from children to seniors. We provide gentle, family-friendly dental services in a comfortable environment.",
    color: "from-beach-blue to-beach-teal",
    features: [
      "Routine dental examinations and check-ups",
      "Preventive care for children and adults",
      "Oral health education and guidance",
      "Fluoride treatments",
      "Dental sealants for children",
      "Emergency dental care",
      "Treatment planning for the whole family",
    ],
  },
  {
    id: "crowns-bridges",
    icon: Award,
    title: "Crowns and Bridges",
    description: "Restore damaged or missing teeth with durable, natural-looking dental crowns and bridges that blend seamlessly with your smile.",
    color: "from-beach-teal to-beach-blue",
    features: [
      "Porcelain crowns for damaged teeth",
      "Ceramic crowns for aesthetic results",
      "Fixed bridges to replace missing teeth",
      "Custom-fitted restorations",
      "Same-day crown options available",
      "Long-lasting, durable solutions",
    ],
  },
  {
    id: "fillings",
    icon: Circle,
    title: "Composite/White Fillings",
    description: "Tooth-colored composite fillings that restore your teeth while maintaining a natural appearance. No more silver fillings!",
    color: "from-beach-ocean to-beach-teal",
    features: [
      "Aesthetic white composite fillings",
      "BPA-free materials",
      "Minimally invasive procedures",
      "Quick and comfortable treatment",
      "Durable and long-lasting",
      "Natural tooth-colored appearance",
    ],
  },
  {
    id: "dentures",
    icon: Heart,
    title: "Dentures (Full & Partial)",
    description: "Custom-made dentures that restore your smile and ability to eat comfortably. Available in full and partial options.",
    color: "from-beach-teal to-beach-ocean",
    features: [
      "Full dentures for complete tooth replacement",
      "Partial dentures for multiple missing teeth",
      "Custom-fitted for comfort",
      "Natural-looking appearance",
      "Improved chewing and speaking",
      "Regular adjustments and maintenance",
    ],
  },
  {
    id: "dental-implants",
    icon: Anchor,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions using state-of-the-art dental implants. From placement to final restoration, we handle it all.",
    color: "from-beach-blue to-beach-teal",
    features: [
      "Single tooth replacements",
      "Immediate placements (after extraction)",
      "Implant bridges",
      "Implant supported dentures",
      "From placement to final restoration",
    ],
  },
  {
    id: "orthodontics",
    icon: ArrowRight,
    title: "Orthodontics",
    description: "Straighten your teeth and correct bite issues with modern orthodontic treatments suitable for all ages.",
    color: "from-beach-blue to-beach-ocean",
    features: [
      "Traditional metal braces",
      "Clear ceramic braces",
      "Orthodontic consultations",
      "Treatment for children and adults",
      "Bite correction",
      "Retainer fittings and maintenance",
    ],
  },
  {
    id: "cleaning-whitening",
    icon: Sparkles,
    title: "Teeth Cleaning and Whitening",
    description: "Professional teeth cleaning and whitening services to keep your smile bright and healthy.",
    color: "from-beach-ocean to-beach-blue",
    features: [
      "Professional dental cleanings",
      "Plaque and tartar removal",
      "Teeth whitening treatments",
      "In-office whitening procedures",
      "Take-home whitening kits",
      "Maintenance and follow-up care",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-0 h-full w-full skew-y-12",
          "text-[#2E86AB]",
        )}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-[#2E86AB] hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-4 flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-beach-ocean flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

