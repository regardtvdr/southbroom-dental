"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-beach-soft-blue/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-beach-ocean to-beach-teal bg-clip-text text-transparent">
            About Southbroom Dental
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in dental health and wellness
          </p>
        </motion.div>
      </div>
    </section>
  );
}

