import { Moon, Sun, Cloud, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="glass-card sticky top-0 z-50 mb-8 animate-fade-in rounded-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="h-8 w-8 text-primary animate-float" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WeatherWise
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="smooth-transition hover:bg-primary/10 rounded-lg"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            
            <Button
              variant="default"
              className="smooth-transition hover:scale-105 rounded-lg bg-gradient-to-r from-primary to-accent"
            >
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
            
            <div className="w-px h-8 bg-border mx-2" />
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="smooth-transition hover:scale-110 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/10 relative overflow-hidden"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
