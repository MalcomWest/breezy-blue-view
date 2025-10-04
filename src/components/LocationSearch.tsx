import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LocationSearchProps {
  onLocationChange: (location: string) => void;
}

const LocationSearch = ({ onLocationChange }: LocationSearchProps) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim()) {
      onLocationChange(location);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="glass-card p-6 hover-lift animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Location</h2>
      </div>
      
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Enter city name or zip code..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-background/50 border-2 focus:border-primary smooth-transition"
        />
        <Button
          onClick={handleSearch}
          className="smooth-transition hover:scale-105"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default LocationSearch;
