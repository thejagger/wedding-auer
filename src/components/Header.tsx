import {Moon, Sun} from "lucide-react";
import {Button} from "./ui/button";
import {useTheme} from "./theme-provider";

export function Header() {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
      <header
          className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div
            className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Johanna & Jonas Auer</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
            >
              <Sun
                  className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
              <Moon
                  className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
  );
}
