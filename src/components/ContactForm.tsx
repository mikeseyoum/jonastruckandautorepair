import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Calendar, Clock, Car, Wrench } from "lucide-react";
import { sendServiceRequest, type ServiceRequest } from "@/lib/emailService";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicleInfo: "",
    urgency: "",
    preferredDate: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the service request using the email service
      const success = await sendServiceRequest(formData as ServiceRequest);

      if (success) {
        toast({
          title: "Service Request Submitted!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          vehicleInfo: "",
          urgency: "",
          preferredDate: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send request");
      }

    } catch (error) {
      console.error("Error submitting service request:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again or call us directly at (403) 123-4567.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base"
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="(403) 123-4567" 
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base"
            required 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="john@example.com" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base"
          required 
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-sm font-medium text-gray-700">What service do you need? *</Label>
        <Select 
          name="service" 
          value={formData.service}
          onValueChange={(value) => handleInputChange('service', value)}
        >
          <SelectTrigger className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oil-change">Oil Change & Maintenance</SelectItem>
            <SelectItem value="brake-service">Brake Service</SelectItem>
            <SelectItem value="engine-repair">Engine Repair & Diagnostics</SelectItem>
            <SelectItem value="transmission">Transmission & Clutch Repair</SelectItem>
            <SelectItem value="heavy-equipment">Heavy Equipment Repair</SelectItem>
            <SelectItem value="mvi-cvip">MVI & CVIP Inspection</SelectItem>
            <SelectItem value="collision-repair">Truck Collision & Body Repair</SelectItem>
            <SelectItem value="wheel-alignment">Truck Wheel Alignment</SelectItem>
            <SelectItem value="egr-dpf">EGR & DPF Cleaning</SelectItem>
            <SelectItem value="hvac">HVAC Repair</SelectItem>
            <SelectItem value="driveline">Driveline Service</SelectItem>
            <SelectItem value="exhaust">Exhaust System</SelectItem>
            <SelectItem value="coolant">Coolant System</SelectItem>
            <SelectItem value="preventive">Preventive Maintenance</SelectItem>
            <SelectItem value="other">Other Service</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Vehicle Information - Simplified */}
      <div className="space-y-2">
        <Label htmlFor="vehicleInfo" className="text-sm font-medium text-gray-700">Vehicle Information *</Label>
        <Input 
          id="vehicleInfo" 
          name="vehicleInfo" 
          placeholder="e.g., 2020 Ford F-150, 2018 Chevrolet Silverado" 
          value={formData.vehicleInfo}
          onChange={(e) => handleInputChange('vehicleInfo', e.target.value)}
          className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base"
          required 
        />
        <p className="text-xs text-gray-500">Include year, make, and model of your vehicle</p>
      </div>

      {/* Urgency and Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">How urgent is this? *</Label>
          <RadioGroup 
            value={formData.urgency}
            onValueChange={(value) => handleInputChange('urgency', value)}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="routine" id="routine" />
              <Label htmlFor="routine" className="text-xs sm:text-sm">Routine (1-2 weeks)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="urgent" id="urgent" />
              <Label htmlFor="urgent" className="text-xs sm:text-sm">Urgent (3-5 days)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="emergency" id="emergency" />
              <Label htmlFor="emergency" className="text-xs sm:text-sm">Emergency (Same day)</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">Preferred Date</Label>
          <Input 
            id="preferredDate" 
            name="preferredDate" 
            type="date" 
            value={formData.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
            className="h-10 sm:h-11 border-gray-300 focus:border-primary-red focus:ring-primary-red/20 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">Tell us about the issue *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe the problem, symptoms, or what you need done..."
          className="min-h-[100px] sm:min-h-[120px] border-gray-300 focus:border-primary-red focus:ring-primary-red/20 resize-none text-sm sm:text-base"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="pt-3 sm:pt-4">
        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full h-10 sm:h-12 text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
              <span className="hidden xs:inline">Submitting Request...</span>
              <span className="xs:hidden">Submitting...</span>
            </>
          ) : (
            <>
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden xs:inline">Book Service Appointment</span>
              <span className="xs:hidden">Book Service</span>
            </>
          )}
        </Button>
        <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 sm:mt-3">
          We'll contact you within 24 hours to confirm your appointment
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
