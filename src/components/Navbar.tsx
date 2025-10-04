import { Moon, Sun, Cloud, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="glass-card sticky top-0 z-50 mb-4 sm:mb-6 md:mb-8 animate-fade-in rounded-lg">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-float" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WeatherWise
            </h1>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="smooth-transition hover:bg-primary/10 rounded-lg hidden sm:flex"
            >
              <LogIn className="h-4 w-4 sm:mr-2" />
              <span className="hidden md:inline">Login</span>
            </Button>
            
            <Button
              variant="default"
              size="sm"
              className="smooth-transition hover:scale-105 rounded-lg bg-gradient-to-r from-primary to-accent hidden sm:flex"
            >
              <User className="h-4 w-4 sm:mr-2" />
              <span className="hidden md:inline">Sign Up</span>
            </Button>
            
            <div className="w-px h-6 sm:h-8 bg-border mx-1 sm:mx-2 hidden sm:block" />
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="smooth-transition hover:scale-110 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/10 relative overflow-hidden h-9 w-9 sm:h-10 sm:w-10"
            >
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
              <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
