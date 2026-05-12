import { Compass, Palette, Users2, Coffee, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Curiosity Driven",
    description: "We explore new ideas fearlessly, always asking 'what if?' and 'why not?'",
  },
  {
    icon: Palette,
    title: "Artful Craft",
    description: "Every detail matters. We obsess over pixels, sounds, and feelings.",
  },
  // {
  //   icon: Users2,
  //   title: "Together Always",
  //   description: "We make decisions together, celebrate together, and grow together.",
  // },
  {
    icon: Coffee,
    title: "Sustainable Joy",
    description: "No crunch, just good vibes. We believe happy devs make happy games.",
  },
  {
    icon: Zap,
    title: "Bold Experiments",
    description: "We take creative risks and embrace the unexpected magic that follows.",
  },
  {
    icon: Heart,
    title: "Player Love",
    description: "Our players are part of our family. We listen, care, and create for them.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/20 -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 border-2 border-foreground text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
            Our Culture
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What makes us{" "}
            <span className="italic">tick</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            These aren't just words on a wall—they're how we live, work, and create every single day.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-8 bg-card border-2 border-border hover:border-foreground transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground transition-all duration-200">
                <value.icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3 uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground italic leading-relaxed">
            "We don't just make games—we make moments. Moments of laughter, wonder, and connection that stay with you long after the credits roll."
          </blockquote>
          {/* <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center">
              <span className="font-heading font-bold text-foreground">PN</span>
            </div>
            <div className="text-left">
              <div className="font-heading font-semibold text-foreground uppercase tracking-wide">Prajwal Nagpure</div>
              <div className="text-sm text-muted-foreground">Founder & CEO</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
