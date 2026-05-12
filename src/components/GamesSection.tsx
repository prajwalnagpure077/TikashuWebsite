import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import game1 from "@/assets/game-1.png";
import game2 from "@/assets/game-2.png";
import game3 from "@/assets/game-3.png";

const games = [
  // {
  //   id: 1,
  //   title: "Echoes of Aethermoor",
  //   description: "An enchanting adventure through mystical ruins and floating islands. Solve ancient puzzles and uncover forgotten secrets.",
  //   image: game1,
  //   platforms: ["PC", "Nintendo Switch"],
  //   status: "Available Now",
  //   rating: 4.8,
  //   featured: true,
  // },
  {
    id: 3,
    title: "FOOLz",
    description: "A Stone age multiplayer chaos.",
    image: game3,
    platforms: ["PC"],
    status: "Coming Soon",
    rating: null,
    featured: true,
    url: "https://store.steampowered.com/app/4235060/Foolz/"
  },
  {
    id: 2,
    title: "GenFlow",
    description: "A Procedural object placement tool",
    image: game2,
    platforms: ["Unity Asset"],
    status: "Available Now",
    rating: null,
    featured: true,
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-24 md:py-32 bg-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-foreground/5" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-foreground/5 rotate-12" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 border-2 border-foreground text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Adventures crafted with{" "}<span className="italic">love & joy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each game is a new world to explore, a new story to tell, and a new way to connect with friends.
          </p>
        </div>

        {/* Games grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <a href={game.url} target="_blank">
              <Card
                key={game.id}
                variant="game"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Game image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider ${game.status === "Available Now"
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground border-2 border-foreground"
                    }`}>
                    {game.status}
                  </div>

                  {/* Rating */}
                  {game.rating && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-foreground text-background px-2 py-1 text-sm font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {game.rating}
                    </div>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {game.description}
                    </p>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 border border-border text-muted-foreground text-xs font-medium uppercase tracking-wide"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group/btn">
                    {game.status === "Available Now" ? "Learn More" : "Wishlist"}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
