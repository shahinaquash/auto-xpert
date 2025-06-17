
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto max-w-6xl text-center">
        <div className="flex justify-center mb-6">
          <Car size={80} className="text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          AutoXpert
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Your trusted partner in finding the perfect vehicle. Quality cars, exceptional service, unbeatable prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Browse Inventory
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
            Schedule Test Drive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
