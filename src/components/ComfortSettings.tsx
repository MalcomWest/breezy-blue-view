import { Settings, Droplets, Thermometer, Wind, Activity } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const ComfortSettings = () => {
  const [temperature, setTemperature] = useState([20]);
  const [humidity, setHumidity] = useState([50]);
  const [airQuality, setAirQuality] = useState([75]);

  const lungDiseases = [
    "None",
    "Asthma",
    "Chronic Bronchitis",
    "COPD (Chronic Obstructive Pulmonary Disease)",
    "Emphysema",
    "Pulmonary Fibrosis",
    "Pneumonia",
    "Tuberculosis",
    "Lung Cancer",
    "Cystic Fibrosis",
    "Bronchiectasis",
  ];

  return (
    <div className="glass-card p-6 hover-lift animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Comfort Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Temperature Preference */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">
              Preferred Temperature: {temperature}°C
            </Label>
          </div>
          <Slider
            value={temperature}
            onValueChange={setTemperature}
            min={-10}
            max={45}
            step={1}
            className="smooth-transition"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>-10°C</span>
            <span>45°C</span>
          </div>
        </div>

        {/* Humidity Preference */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">
              Preferred Humidity: {humidity}%
            </Label>
          </div>
          <Slider
            value={humidity}
            onValueChange={setHumidity}
            min={0}
            max={100}
            step={5}
            className="smooth-transition"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Air Quality Preference */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">
              Minimum Air Quality Index: {airQuality}
            </Label>
          </div>
          <Slider
            value={airQuality}
            onValueChange={setAirQuality}
            min={0}
            max={100}
            step={5}
            className="smooth-transition"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Poor</span>
            <span>Excellent</span>
          </div>
        </div>

        {/* Lung Disease Selection */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Respiratory Conditions</Label>
          </div>
          <Select>
            <SelectTrigger className="bg-background/50 border-2 focus:border-primary smooth-transition">
              <SelectValue placeholder="Select if you have any lung conditions" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-2 z-50">
              {lungDiseases.map((disease) => (
                <SelectItem
                  key={disease}
                  value={disease.toLowerCase()}
                  className="smooth-transition hover:bg-accent/50"
                >
                  {disease}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ComfortSettings;
