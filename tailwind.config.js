module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-[#007AFF]",
    "hover:bg-[#007AFF]/90",
    "bg-destructive",
    "hover:bg-destructive/90",
    "hover:bg-accent",
    "hover:text-accent-foreground",
    "bg-secondary",
    "hover:bg-secondary/80",
    "hover:underline",
    "underline-offset-4",
    "border",
    "bg-background",
    "shadow-xs",
    // Add more if needed
  ],
};
