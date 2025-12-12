import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-beach-soft-blue to-beach-ocean text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-2">Southbroom Dental</h3>
            <p className="text-lg font-semibold mb-3 text-beach-sand">Your Smile Says It All!</p>
            <p className="text-sm text-white/90">
              Your trusted dental care provider in Southbroom, South Africa.
              We&apos;re committed to providing exceptional dental services with a
              gentle touch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-beach-sand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-beach-sand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-beach-sand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-beach-sand transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">
                  186 Beach Rd<br />
                  Southbroom, Margate, 4277<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+27393166145" className="hover:text-beach-sand transition-colors">
                  039 316 6145
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@southbroomdental.co.za" className="hover:text-beach-sand transition-colors">
                  info@southbroomdental.co.za
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="https://www.facebook.com/p/Southbroom-Dental-100031551295461/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-beach-sand transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/southbroomdental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-beach-sand transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {new Date().getFullYear()} Southbroom Dental. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link href="/terms" className="hover:text-beach-sand transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/popia" className="hover:text-beach-sand transition-colors">
                POPIA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

