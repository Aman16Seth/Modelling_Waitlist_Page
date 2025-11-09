import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          <p className="text-xl italic text-gray-300">
            Built by models, for models.
          </p>
          
          <div className="flex items-center justify-center gap-6">
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
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@modelmarketplace.com" className="hover:text-amber-500 transition-colors">
              Contact: info@modelmarketplace.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
