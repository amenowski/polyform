import Feature1 from "../../assets/images/feature1.webp";
import Feature2 from "../../assets/images/feature2.webp";
import Feature3 from "../../assets/images/feature3.webp";
import Container from "./Container";

export default function Features() {
  return (
    <section className="w-full bg-featuresBackground py-20">
      <Container className="grid gap-x-4 gap-y-10 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="h-96 w-full overflow-hidden">
            <img
              src={Feature3}
              alt="Personalised designs"
              className="h-full w-full object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="px-4 py-8 text-center md:px-8">
            <h3 className="mb-4 text-3xl">Personalised designs</h3>
            <p className="text-sm text-gray-800">
              Create unique storage that matches your style and your needs by
              customising fit, colour and size in a few clicks.
            </p>
          </div>
        </div>
        <div>
          <div className="h-96 w-full overflow-hidden">
            <img
              src={Feature1}
              alt="Built to last"
              className="h-full w-full object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="px-4 py-8 text-center md:px-8">
            <h3 className="mb-4 text-3xl">Built to last</h3>
            <p className="text-sm text-gray-800">
              All our products are made with premium, consciously-sourced
              material so rest assured they’ll last you a lifetime.
            </p>
          </div>
        </div>
        <div>
          <div className="h-96 w-full overflow-hidden">
            <img
              src={Feature2}
              alt="Simple Assembly"
              className="h-full w-full object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="px-4 py-8 text-center md:px-8">
            <h3 className="mb-4 text-3xl">Simple Assembly</h3>
            <p className="text-sm text-gray-800">
              We’ve created a game changing click-in system that makes
              assembling your Tylko a breeze.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
