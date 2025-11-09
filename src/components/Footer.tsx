import { Button } from "./ui/button"; // Assuming this is the same Button component
import { Mail } from "lucide-react";

export function Footer() {
  const scrollToWaitlist = () => {
    const googleFormURL = "https://forms.gle/xvyZ4GNS6TJtpsbK7";
    window.open(googleFormURL, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          <p className="text-xl italic text-gray-300">
            Crafting Connections for Models and Designers
          </p>

          {/* Social Links Currently Unavailable */}
          {/* <div className="flex items-center justify-center gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div> */}

          {/* Waitlist Button */}
          <div className="flex justify-center mt-4">
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black px-12 py-6 text-lg shadow-2xl"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:info@modelmarketplace.com"
              className="hover:text-amber-500 transition-colors"
            >
              Contact: arasoftech.org@gmail.com
            </a>
          </div>

          <p className="text-l italic text-gray-300">
            Developed and Maintained by ARAsoftech
          </p>
        </div>
      </div>
    </footer>
  );
}
