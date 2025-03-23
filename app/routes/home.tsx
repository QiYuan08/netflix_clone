import type { ReactElement } from "react";
import PricingCard, { type PricingCardProps } from "~/component/PricingCard";

type Image = {
  src: string;
};

export default function Home() {
  const images: Image[] = [
    {
      src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    },
  ];

  const pricingCards: PricingCardProps[] = [
    {
      title: "Mobile",
      subtitle: "480p",
      description: ["For video quality", "For your phone or tablet"],
      price: "RM 18.90",
      img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
      title: "Basic",
      subtitle: "720p",
      description: [
        "Good video quality",
        "For your phone, tablet, laptop and TV",
      ],
      price: "RM 29.90",
      img: "https://wallpapercave.com/dwp1x/wp11177349.jpg",
    },
    {
      title: "Standard",
      subtitle: "1080p",
      description: [
        "Great video quality",
        "For your phone, tablet, laptop and TV",
      ],
      price: "RM 49.90",
      img: "https://www.wallpaperflare.com/static/817/679/717/captain-america-wallpaper-thumb.jpg",
    },
    {
      title: "Premius",
      subtitle: "4K + HDR",
      description: [
        "Best video quality",
        "Immersive sound (sptial audio)",
        "For your phone, tablet, laptop and TV",
      ],
      price: "RM 62.90",
      img: "https://i.pinimg.com/736x/30/0e/4e/300e4e78717ff9bba84d09d4ff81a3fd.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-4 px-6">
      <div className="flex justify-center">
        <div className="join">
          <button className="btn join-item bg-accent">Poular Now</button>
          <button className="btn join-item border-x-0 bg-accent">Plans</button>
          <button className="btn join-item border-l-0 bg-accent">
            Reasons to Join
          </button>
        </div>
      </div>

      {/* carousel */}
      <div className="carousel w-full">
        {images.map((img, idx): ReactElement => {
          let total = images.length;

          return (
            <div id={`slide${idx}`} className="relative carousel-item w-full">
              <img src={img.src} className="w-full clip-img" />
              <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${idx - 1}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${idx + 1}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* price plan */}
      <div className="grid gap-x-2 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
        {pricingCards.map((card) => {
          return (
            <PricingCard
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              price={card.price}
              img={card.img}
            />
          );
        })}
      </div>
    </div>
  );
}
