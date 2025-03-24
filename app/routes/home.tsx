import type { ReactElement } from "react";
import PricingCard, {
  type PricingCardProps,
} from "~/component/home/PricingCard";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import ReasonToJoinCard from "~/component/home/ReasonToJoinCard";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import AccordianJoined from "~/component/common/AccordianJoined";

type Image = {
  src: string;
};

export default function Home() {
  const images: Image[] = [
    {
      src: "https://c4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-makoto-shinkai-starry-night-comet-wallpaper-preview.jpg",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/110/381/152/jurassic-park-jurassic-world-chris-pratt-wallpaper-preview.jpg",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/662/716/947/inception-movies-movie-scenes-group-of-people-wallpaper-preview.jpg",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/820/461/127/anime-katekyō-hitman-reborn-hitman-reborn-tsunayoshi-sawada-wallpaper-preview.jpg",
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
      <div className="fixed top-1/12 left-1/2 z-3 -translate-1/2">
        <div className="flex justify-center">
          <div className="join">
            <button className="btn join-item bg-accent">Poular Now</button>
            <button className="btn join-item border-x-0 bg-accent">
              Plans
            </button>
            <button className="btn join-item border-l-0 bg-accent">
              Reasons to Join
            </button>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="carousel w-full shadow-lg">
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

      {/* reason to join */}
      <div className="mt-2 flex w-full flex-col justify-start gap-y-1">
        <h2 className="grow text-xl font-semibold">More Reasons to Join</h2>

        <ReasonToJoinCard
          title="Enjoy on your TV"
          description="A card component has a figure, a body part, and inside body
                there are title and actions parts"
          icon={PiTelevisionSimpleLight}
        />

        <ReasonToJoinCard
          title="Enjoy on your TV"
          description="A card component has a figure, a body part, and inside body
                there are title and actions parts"
          icon={IoCloudDownloadOutline}
        />

        <ReasonToJoinCard
          title="Download your shows to watch offline"
          description="Save your favorites easily and always have something to watch."
          icon={CiGlobe}
        />

        <ReasonToJoinCard
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          icon={PiTelevisionSimpleLight}
        />

        <ReasonToJoinCard
          title="Create profiles for kids"
          description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
          icon={FaArrowsDownToPeople}
        />
      </div>

      {/* FAQ */}
      <div className="mt-2 flex w-full flex-col justify-start gap-y-1">
        <h2 className="grow text-xl font-semibold">
          Frequently Asked Question
        </h2>

        <AccordianJoined
          items={[
            {
              title: "What is Netflix?",
              description:
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            },
            {
              title: "How much does Netflix cost",
              description:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from RM 18.90 to RM 62.90 a month. No extra costs, no contracts.",
            },
            {
              title: "Where can I watch?",
              description:
                "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            },
            {
              title: "How do I cancel?",
              description:
                "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            },
            {
              title: "What can I watch on Netflix",
              description:
                "Everything!! And you can request more if there is a missing movie that you want to add",
            },
            {
              title: "Is Netflix good for kids",
              description:
                "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            },
          ]}
        />
      </div>
    </div>
  );
}
