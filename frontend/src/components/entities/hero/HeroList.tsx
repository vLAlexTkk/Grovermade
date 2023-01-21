import { Heading } from "@components/ui/heading/Heading";
import { NextImage } from "@src/components/ui";
import { TabsPage } from "./TabsPage";

export const HeroList = ({}): JSX.Element => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:py-18 lg:flex-row xl:gap-20">
        <div className="grid grid-cols-1 gap-5 lg:gap-7.5">
          <Heading type="main">
            Find the perfect <br className="hidden lg:flex" /> place to stay with <br className="hidden lg:flex" /> your
            family
          </Heading>
          <p className="text-18 font-medium leading-27">
            Buying a home is a life-changing experience, so shouldn`t <br /> your real estate agent be a life changer.
          </p>
          <TabsPage />
        </div>
        <div>
          <img
            src="/images/hero-image.png"
            alt="hero-image"
            className="!z-0 hidden lg:flex lg:h-[500px] lg:w-[400px] xl:h-[500px] xl:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
