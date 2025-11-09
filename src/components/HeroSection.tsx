import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToWaitlist = () => {
    const googleFormURL = "https://forms.gle/xvyZ4GNS6TJtpsbK7";
    window.open(googleFormURL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvdyUyMHJ1bndheXxlbnwxfHx8fDE3NjI1Nzk3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fashion Show Runway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-white mb-6 tracking-tight">
          Book Models Directly. No Middlemen. No Markup.
        </h1>
        <p className="text-white/90 mb-12 max-w-3xl mx-auto text-xl">
          Professional modeling marketplace for fashion shows and events in Delhi NCR
        </p>
        <Button
          onClick={scrollToWaitlist}
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-black px-12 py-6 text-lg shadow-2xl"
        >
          Join Waitlist
          {/* <ArrowDown className="ml-2 h-5 w-5" /> */}
        </Button>
      </div>
    </section>
  );
}
