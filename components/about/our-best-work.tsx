"use client";

import { motion } from "framer-motion";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function OurBestWork() {
  // Using the before and after images from public folder
  const images = [
    "/before.jpg",
    "/before 1.jpg",
    "/before 3.jpg",
    "/before 4.jpg",
    "/before 5.png",
    "/before 6.jpg",
    "/before 7.jpg",
    "/before 8.jpg",
    "/before 9.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Best Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformative results of our dental treatments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-center border border-dashed rounded-lg space-y-4 p-2">
            <ThreeDPhotoCarousel images={images} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
