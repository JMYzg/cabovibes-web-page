import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative">
        <AspectRatio ratio={16 / 9}>
          <video
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover rounded-md"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70 rounded-md" />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-background px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Experience the Magic of Los Cabos
              </h1>
              <p className="text-xl md:text-2xl">
                Sport fishing trips and unforgettable nights on a yacht—let us
                plan every detail for you
              </p>
              <Button variant="outline" className="mt-6 text-foreground">
                <Compass />
                Explore Tours
              </Button>
            </div>
          </div>
        </AspectRatio>
      </section>
      <section className="flex">
        <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full">
          <div className="span-cols-3">
            <Image
              src="/images/hero.jpg"
              alt="Hero"
              width={1000}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}
