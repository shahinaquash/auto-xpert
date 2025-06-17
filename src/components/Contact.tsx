
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit AutoXpert Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the difference of working with automotive experts who care about your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-blue-400/30 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-200">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-200">Address</h4>
                <p className="text-blue-100">123 Auto Plaza Drive<br />Automotive City, AC 12345</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200">Phone</h4>
                <p className="text-blue-100">(555) 123-AUTO</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200">Email</h4>
                <p className="text-blue-100">info@autoxpert.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200">Hours</h4>
                <p className="text-blue-100">
                  Mon-Fri: 9:00 AM - 8:00 PM<br />
                  Sat: 9:00 AM - 6:00 PM<br />
                  Sun: 12:00 PM - 5:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-blue-400/30 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-200">Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-blue-100">
                Ready to find your perfect vehicle? Our expert team is here to help you every step of the way.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 transition-all duration-300 transform hover:scale-105">
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white rounded-full py-3 transition-all duration-300">
                  Get Pre-Approved
                </Button>
                <Button variant="outline" className="w-full border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white rounded-full py-3 transition-all duration-300">
                  Trade-In Value
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
