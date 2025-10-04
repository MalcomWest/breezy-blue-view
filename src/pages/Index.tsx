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
        
        <main className="container mx-auto px-3 sm:px-4 md:px-6 pb-6 sm:pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Hero Section */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-fade-in px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Your Personal Weather Assistant
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Track weather conditions tailored to your comfort and health needs
              </p>
            </div>

            {/* Location Search */}
            <LocationSearch onLocationChange={setLocation} />

            {/* Two Column Layout - stacks on mobile, side by side on tablet+ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
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
