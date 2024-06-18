import Essential1 from "../assets/images/essentials-1.webp";
import Essential2 from "../assets/images/essentials-2.webp";
import Button from "./ui/Button";
// import Button from "./ui/Button";

// export default function Essentials() {
//   return (
//     <div className="flex flex-col gap-12">
//       <div className="bg-essentialBackground1 grid w-full place-content-center gap-16 md:grid-cols-2">
//         <div className="relative overflow-hidden">
//           <img
//             className="absolute inset-0 h-full w-full object-cover object-center"
//             src={Essential1}
//             alt="Essentials"
//           />
//         </div>
//         <div className="flex xl max-w-xl:max-w-2xl flex-col items-start gap-8 px-12 py-16">
//           <h3 className="text-5xl">
//             Our design process starts with a simple question.
//           </h3>
//           <p className="text-xl text-gray-700">
//             We're confident that this store will be the next big thing in its
//             industry, and that its products will be timeless.
//           </p>
//           <span className="text-sm text-gray-500">
//             Create unique storage that matches your style and your needs by
//             customising fit, colour and size in a few clicks.
//           </span>
//           <span className="text-sm text-gray-500">
//             All our products are made with premium, consciously-sourced material
//             so rest assured they’ll last you a lifetime.
//           </span>
//           <Button>Find out more</Button>
//         </div>
//       </div>
//       <div className="bg-essentialBackground grid w-full place-content-center gap-16 md:grid-cols-2">
//         <div className="relative order-2 overflow-hidden">
//           <img
//             className="absolute inset-0 h-full w-full object-cover object-center"
//             src={Essential1}
//             alt="Essentials"
//           />
//         </div>
//         <div className="flex xl max-w-xl:max-w-2xl flex-col items-start gap-8 px-12 py-16">
//           <h3 className="text-5xl">
//             Our design process starts with a simple question.
//           </h3>

//           <span className="text-sm text-gray-500">
//             All our products are made with premium, consciously-sourced material
//             so rest assured they’ll last you a lifetime.
//           </span>
//           <Button>Find out more</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Essentials() {
  return (
    <div className="grid w-full grid-rows-2">
      <div className="bg-essentialBackground1 grid lg:grid-cols-2">
        <img className="order-1 w-full lg:order-2" src={Essential1} />
        <div className="flex flex-col items-start justify-center gap-8 px-8 py-16 md:max-h-full lg:order-2 lg:max-w-xl xl:max-w-2xl xl:px-16">
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
          <Button>Find out more</Button>
        </div>
      </div>
      <div className="bg-essentialBackground2 grid lg:grid-cols-2">
        <img className="order-2 h-full w-full object-cover" src={Essential2} />

        <div className="flex max-w-xl flex-col items-start justify-center gap-8 px-8 py-0 md:max-h-full lg:py-16 xl:px-16">
          <h3 className="text-4xl xl:text-5xl">
            How-to choose the carpet that match your space
          </h3>
          <span className="text-sm text-gray-500">
            Buying a carpet is not a simple matter. We'll advise you on how you
            can also choose the best carpet just for you.
          </span>
          <Button>Find out more</Button>
        </div>
      </div>
    </div>
  );
}
