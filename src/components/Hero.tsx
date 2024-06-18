import HeroBg from "../assets/images/hp1.webp";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div>
      <div className="h-screen">
        <div className="absolute top-0 -z-50 h-[900px] w-full">
          <img src={HeroBg} className="h-[900px] w-full object-cover" />
          <div className="absolute inset-0 mx-auto flex max-w-[1440px] flex-col items-start justify-center gap-4 px-4 text-white">
            <span className="text-sm uppercase">new arrivals</span>
            <h1 className="text-left text-6xl leading-none md:text-7xl md:leading-tight">
              Elevate your <br /> space withluxe <br /> furniture!
            </h1>
            <span>Explore our collections for a wider selection.</span>
            <Button to="shop">Find out more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
