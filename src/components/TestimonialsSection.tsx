import { Card } from "./ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Finally, someone thought about this. Amazing Idea! Very excited to use this platform.",
      author: "Model",
    },
    {
      quote: "Finding models takes me 2 weeks. This would save so much time.",
      author: "Designer",
    },
    {
      quote: "I've been losing 40% to middlemen. This is exactly what we need!",
      author: "Model",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 bg-white shadow-lg border-0">
              <Quote className="h-12 w-12 text-amber-500 mb-6 opacity-50" />
              <blockquote className="text-lg text-gray-800 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-gray-600">
                — {testimonial.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
