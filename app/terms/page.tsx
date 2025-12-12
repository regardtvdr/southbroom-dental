"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-8">
          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Southbroom Dental website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our dental services are provided for your personal use. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use our services only for lawful purposes</li>
                <li>Provide accurate and complete information when booking appointments</li>
                <li>Respect the rights of other patients and staff</li>
                <li>Follow all instructions provided by our dental professionals</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">3. Appointments and Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Appointment policies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Appointments must be cancelled at least 24 hours in advance</li>
                <li>Late cancellations or no-shows may be subject to a cancellation fee</li>
                <li>We reserve the right to reschedule appointments when necessary</li>
                <li>Emergency appointments are subject to availability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment for services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Payment is due at the time of service unless prior arrangements have been made</li>
                <li>We accept cash, credit cards, and medical aid schemes where applicable</li>
                <li>Medical aid claims are subject to your scheme&apos;s terms and conditions</li>
                <li>Outstanding accounts may incur interest charges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">5. Medical Information and Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only and does not constitute professional dental or medical advice. Always consult with a qualified dental professional for diagnosis and treatment recommendations specific to your condition.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Southbroom Dental shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our liability is limited to the maximum extent permitted by South African law.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Southbroom Dental</strong><br />
                186 Beach Rd, Southbroom, Margate, 4277, South Africa<br />
                Phone: 039 316 6145<br />
                Email: info@southbroomdental.co.za
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
