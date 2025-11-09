import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

export function WaitlistFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    userType: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.userType || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    console.log("Waitlist signup:", formData);
    toast.success("You're on the waitlist! We'll notify you at launch.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      userType: "",
      city: "",
    });
  };

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-center mb-16">Join the Launch Waitlist</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone/WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="userType">I am a: *</Label>
            <Select value={formData.userType} onValueChange={(value) => setFormData({ ...formData, userType: value })}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="model">Model</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="organizer">Organizer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="noida">Noida</SelectItem>
                <SelectItem value="gurgaon">Gurgaon</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-black text-lg"
          >
            Notify Me at Launch
          </Button>

          <p className="text-sm text-gray-500 text-center pt-4">
            We're launching in December 2025. First 50 signups get free premium features for 6 months.
          </p>
        </form>
      </div>
    </section>
  );
}
