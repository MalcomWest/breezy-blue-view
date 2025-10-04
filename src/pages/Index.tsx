import { useState } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import LocationSearch from "@/components/LocationSearch";
import ComfortSettings from "@/components/ComfortSettings";
import MapView from "@/components/MapView";

const Index = () => {
  const [location, setLocation] = useState("");

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="container mx-auto px-4 pb-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Hero Section */}
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Your Personal Weather Assistant
              </h2>
              <p className="text-lg text-muted-foreground">
                Track weather conditions tailored to your comfort and health needs
              </p>
            </div>

            {/* Location Search */}
            <LocationSearch onLocationChange={setLocation} />

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Comfort Settings */}
              <ComfortSettings />

              {/* Map View */}
              <MapView location={location} />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
