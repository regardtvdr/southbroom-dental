"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
      <div className="space-y-4">
        <Card className="border-2 border-[#2E86AB] hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  186 Beach Rd<br />
                  Southbroom, Margate, 4277<br />
                  South Africa
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#2E86AB] hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+27393166145" className="hover:text-beach-ocean transition-colors">
                    039 316 6145
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#2E86AB] hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@southbroomdental.co.za" className="hover:text-beach-ocean transition-colors">
                    info@southbroomdental.co.za
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#2E86AB] hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beach-ocean to-beach-teal flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Office Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday: 08:00 - 17:00</p>
                  <p>Tuesday: 08:00 - 17:00</p>
                  <p>Wednesday: 08:00 - 17:00</p>
                  <p>Thursday: 08:00 - 17:00</p>
                  <p>Friday: 08:00 - 17:00</p>
                  <p>Saturday: CLOSED</p>
                  <p>Sunday: CLOSED</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

