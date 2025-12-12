"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function POPIAPage() {
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
            POPIA Compliance
          </h1>
          <p className="text-muted-foreground">
            Protection of Personal Information Act (POPIA) - Privacy Notice
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-8">
          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Southbroom Dental is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) No. 4 of 2013. This notice explains how we collect, use, store, and protect your personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Personal Details:</strong> Name, date of birth, ID number, contact details (phone, email, address)</li>
                <li><strong>Medical Information:</strong> Medical history, dental records, treatment plans, X-rays, and photographs</li>
                <li><strong>Financial Information:</strong> Payment details, medical aid information, account history</li>
                <li><strong>Website Usage:</strong> IP address, browser type, pages visited (collected through cookies)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Providing dental treatment and care</li>
                <li>Managing appointments and scheduling</li>
                <li>Processing payments and medical aid claims</li>
                <li>Maintaining accurate medical records</li>
                <li>Communicating with you about your treatment</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our services and website</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal information based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Consent:</strong> Your explicit consent for specific purposes</li>
                <li><strong>Contract:</strong> To fulfill our contractual obligations for dental services</li>
                <li><strong>Legal Obligation:</strong> To comply with healthcare regulations and laws</li>
                <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">5. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Medical aid schemes (for claims processing)</li>
                <li>Other healthcare providers (with your consent, for referral purposes)</li>
                <li>Laboratories and specialists (for diagnostic and treatment purposes)</li>
                <li>Legal and regulatory authorities (when required by law)</li>
                <li>Service providers (IT, accounting) under strict confidentiality agreements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Secure electronic storage systems with encryption</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection and confidentiality</li>
                <li>Physical security measures for paper records</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this notice, or as required by law. Medical records are typically retained for a minimum of 6 years from the last treatment date, or longer if required by regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under POPIA, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Data Portability:</strong> Request transfer of your information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (where applicable)</li>
                <li><strong>Lodge a Complaint:</strong> Lodge a complaint with the Information Regulator</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">9. Cookies and Website Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. For more information, please refer to our Cookie Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">10. Information Regulator</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have concerns about how we handle your personal information, you can contact:
              </p>
              <p className="text-muted-foreground">
                <strong>Information Regulator of South Africa</strong><br />
                Website: www.justice.gov.za/inforeg<br />
                Email: inforeg@justice.gov.za<br />
                Tel: 012 406 4818
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any questions, requests, or concerns regarding your personal information, please contact our Information Officer:
              </p>
              <p className="text-muted-foreground">
                <strong>Southbroom Dental</strong><br />
                186 Beach Rd, Southbroom, Margate, 4277, South Africa<br />
                Phone: 039 316 6145<br />
                Email: info@southbroomdental.co.za
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#2E86AB]">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">12. Updates to This Notice</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Notice from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on our website with the revised date. We encourage you to review this notice periodically.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
