"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "5000+", label: "Happy Patients" },
  { number: "15+", label: "Years of Experience" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Emergency Support" },
];

function AnimatedNumber({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-beach-ocean to-beach-teal bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-beachy-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedNumber key={stat.label} value={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

