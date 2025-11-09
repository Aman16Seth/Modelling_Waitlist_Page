import { User, Upload, Search, Handshake, FileText, Eye, CheckCircle, Phone } from "lucide-react";

export function HowItWorksSection() {
  const modelSteps = [
    {
      icon: User,
      title: "Create Profile",
      description: "Upload portfolio & details",
    },
    {
      icon: Search,
      title: "Browse Shows",
      description: "Find opportunities you like",
    },
    {
      icon: CheckCircle,
      title: "Apply",
      description: "One-click application",
    },
    {
      icon: Handshake,
      title: "Get Booked",
      description: "Designer contacts you directly",
    },
  ];

  const designerSteps = [
    {
      icon: FileText,
      title: "Post Show",
      description: "List your requirements",
    },
    {
      icon: Eye,
      title: "Review Models",
      description: "See applications with portfolios",
    },
    {
      icon: CheckCircle,
      title: "Select",
      description: "Choose perfect models",
    },
    {
      icon: Phone,
      title: "Connect",
      description: "Get contact details instantly",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-20">How It Works</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Models Flow */}
          <div className="bg-gray-50 rounded-2xl p-10">
            <h3 className="text-center mb-12 text-amber-600">For Models</h3>
            <div className="space-y-8">
              {modelSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-black" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl text-amber-600 opacity-50">{index + 1}</span>
                        <h4 className="text-xl">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Designers Flow */}
          <div className="bg-gray-50 rounded-2xl p-10">
            <h3 className="text-center mb-12 text-amber-600">For Designers</h3>
            <div className="space-y-8">
              {designerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-black" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl text-amber-600 opacity-50">{index + 1}</span>
                        <h4 className="text-xl">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
