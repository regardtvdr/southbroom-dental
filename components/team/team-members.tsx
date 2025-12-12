"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Team members listed from left to right (as they appear in the photo)
const teamMembers = [
  {
    name: "Dr F. Swanepoel",
    role: "Dentist",
    bio: "Committed to helping patients achieve healthy, beautiful smiles through modern dental techniques and compassionate care.",
  },
  {
    name: "Angie",
    role: "Dental Assistant",
    bio: "Dedicated dental assistant committed to assisting with procedures and maintaining a welcoming environment for all patients.",
  },
  {
    name: "Corine",
    role: "Dental Receptionist/Admin",
    bio: "Friendly and efficient receptionist managing appointments and ensuring smooth operations at the front desk.",
  },
  {
    name: "Monique",
    role: "Dental Assistant",
    bio: "Skilled dental assistant providing support and ensuring patients feel comfortable throughout their dental visits.",
  },
  {
    name: "Dr P. Ferreira",
    role: "Dentist",
    bio: "Experienced dentist dedicated to providing exceptional dental care with a gentle and professional approach.",
  },
];

export function TeamMembers() {
  return (
    <section className="pt-8 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-center px-4">
            <div className="border-2 border-beach-ocean/20 rounded-lg shadow-xl bg-white p-4 sm:p-[50px] inline-block max-w-full">
              <div className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/dentists.jpg"
                  alt="Southbroom Dental Team"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 500px, 700px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-[#2E86AB] hover:border-[#2E86AB] text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-sm text-beach-ocean font-semibold mb-3">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

