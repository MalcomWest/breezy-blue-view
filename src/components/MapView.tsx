import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MapViewProps {
  location: string;
}

const MapView = ({ location }: MapViewProps) => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    const loadMapbox = async () => {
      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        await import("mapbox-gl/dist/mapbox-gl.css");

        mapboxgl.accessToken = mapboxToken;
        setShowTokenInput(false);

        if (map.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current!,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-74.5, 40],
          zoom: 9,
        });

        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        new mapboxgl.Marker({ color: "#0ea5e9" })
          .setLngLat([-74.5, 40])
          .addTo(map.current);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMapbox();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  if (showTokenInput) {
    return (
      <div className="glass-card p-6 hover-lift animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Location Map</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To view the interactive map, please enter your Mapbox public token.
            You can get one from{" "}
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter Mapbox token..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1 bg-background/50 border-2 focus:border-primary smooth-transition"
            />
            <Button
              onClick={() => setMapboxToken(mapboxToken)}
              disabled={!mapboxToken.trim()}
              className="smooth-transition hover:scale-105"
            >
              Load Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 hover-lift animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Location Map</h2>
        {location && (
          <span className="text-sm text-muted-foreground">- {location}</span>
        )}
      </div>
      
      <div
        ref={mapContainer}
        className="w-full h-[400px] rounded-xl overflow-hidden border-2 border-primary/20"
      />
    </div>
  );
};

export default MapView;
