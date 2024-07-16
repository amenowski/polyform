import Essential1 from "../../assets/images/essentials-1.webp";
import Essential2 from "../../assets/images/essentials-2.webp";
import ImageScaleAnimation from "../ImageScaleAnimation";
import TextFadeAnimation from "../TextFadeAnimation";
import Button from "../ui/Button";

export default function Essentials() {
  return (
    <div className="grid w-full grid-rows-2">
      <div className="grid overflow-hidden bg-essentialBackground1 lg:grid-cols-2">
        <ImageScaleAnimation
          animateScale={1}
          initialScale={1.2}
          duration={0.5}
          className="order-1 w-full overflow-hidden lg:order-2"
          src={Essential1}
        />
        <TextFadeAnimation
          animateY={0}
          initialY="20%"
          duration={1}
          className="flex flex-col items-start justify-center gap-8 px-8 py-16 md:max-h-full lg:order-2 lg:max-w-xl xl:max-w-2xl xl:px-16"
        >
          <h3 className="text-4xl xl:text-5xl">
            Our design process starts with a simple question.
          </h3>
          <p className="text-xl text-gray-700">
            We're confident that this store will be the next big thing in its
            industry, and that its products will be timeless.
          </p>
          <span className="text-sm text-gray-500">
            Create unique storage that matches your style and your needs by
            customising fit, colour and size in a few clicks.
          </span>
          <span className="text-sm text-gray-500">
            All our products are made with premium, consciously-sourced material
            so rest assured they’ll last you a lifetime.
          </span>
          <Button to="shop">Find out more</Button>
        </TextFadeAnimation>
      </div>
      <div className="grid bg-essentialBackground2 lg:grid-cols-2">
        <ImageScaleAnimation
          animateScale={1}
          initialScale={1.2}
          duration={0.5}
          className="order-2 h-full w-full object-cover"
          src={Essential2}
        />
        <TextFadeAnimation
          animateY={0}
          initialY="20%"
          duration={1}
          className="flex max-w-xl flex-col items-start justify-center gap-8 px-8 py-0 md:max-h-full lg:py-16 xl:px-16"
        >
          <h3 className="text-4xl xl:text-5xl">
            How-to choose the carpet that match your space
          </h3>
          <span className="text-sm text-gray-500">
            Buying a carpet is not a simple matter. We'll advise you on how you
            can also choose the best carpet just for you.
          </span>
          <Button to="shop">Find out more</Button>
        </TextFadeAnimation>
      </div>
    </div>
  );
}
