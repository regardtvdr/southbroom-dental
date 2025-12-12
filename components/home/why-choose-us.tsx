"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Award, Users, Clock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Highly qualified dentists with years of experience",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your comfort and satisfaction are our top priorities",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Convenient appointment times to fit your schedule",
  },
  {
    icon: Shield,
    title: "Modern Technology",
    description: "State-of-the-art equipment for the best results",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-beach-soft-blue/30 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.25}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
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
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of personalized, professional dental care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-2 border-[#2E86AB] bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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

