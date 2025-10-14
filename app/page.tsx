import Image from "next/image";

export default function Home() {
  return (
    <section className="rounded-sm overflow-hidden w-full max-w-[1160px] aspect-[1160/838] mt-20">
      <Image
        src="/images/hero.jpg"
        alt="Scenic view of Cabo San Lucas coastline"
        width={1160}
        height={838}
        className="w-full h-full object-cover"
        priority
      />
    </section>
  );
}
