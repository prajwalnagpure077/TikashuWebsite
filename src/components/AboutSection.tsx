import { Users, Heart, Gamepad2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Friends First",
    description: "Every game starts with a group of friends who love playing together.",
    color: "bg-teal-light text-primary",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "We pour our hearts into every pixel, every sound, every moment.",
    color: "bg-coral-light text-secondary",
  },
  {
    icon: Gamepad2,
    title: "Play Together",
    description: "Our games are designed to create memories with the people you love.",
    color: "bg-purple-light text-accent",
  },
  {
    icon: Sparkles,
    title: "Pure Magic",
    description: "We believe in the magic of play and the joy of discovery.",
    color: "bg-sand text-foreground",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 border-2 border-foreground text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                A solo dev making {" "}
                <span className="italic">unforgettable</span>{" "}
                adventures
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lantensoft Games was born from late-night developement and a shared dream: 
              to create worlds that spark joy and bring people together. We're a small 
              but we believe that 
              the best games come from genuine curiosity.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our studio feels more like a treehouse than an office—filled with 
              sketches, snacks, and the occasional spontaneous dance break. We work 
              hard, play harder, and never forget why we started: to make games that 
              feel like coming home.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-foreground">1</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-foreground">1</div>
                <div className="text-sm text-muted-foreground">Games in Production</div>
              </div>
              {/* <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </div> */}
            </div>
          </div>
          
          {/* Right - Feature cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-card border-2 border-border hover:border-foreground transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
