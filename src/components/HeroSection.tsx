import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 poly-pattern" /> */}

      {/* Sharp geometric shapes */}
      <div className="absolute top-32 left-10 w-16 h-16 border-2 border-foreground/10 rotate-12 animate-float" />
      <div className="absolute top-48 right-20 w-12 h-12 bg-muted animate-float-slow" />
      <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-foreground/5 -rotate-6 animate-float-reverse" />
      <div className="absolute bottom-48 right-10 w-8 h-8 bg-foreground/5 rotate-45 animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 border-2 border-foreground/20 px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider animate-fade-in">
              <span className="w-2 h-2 bg-foreground" />
              Crafting adventures since November 2025
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We make games
              <br />
              <span className="italic">with friends,</span>
              <br />
              for friends.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A cozy game studio where creativity meets friendship. We craft whimsical PC and console adventures that bring people together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {/* <Button variant="hero">
                Explore Our Games
                <ArrowRight className="w-5 h-5" />
              </Button> */}
              <a href="https://www.youtube.com/watch?v=-JzpNXiZVHQ" target="_blank">
                <Button variant="hero-outline">
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative animate-float-slow">
              <img
                src={heroIllustration}
                alt="Whimsical low-poly floating island with a cozy game studio"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
              {/* Glow effect behind illustration */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl -z-10 scale-125" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
