import { Heading } from "@components/ui/heading/Heading";
import { buildingInfo } from "@src/data/data";
import { BuildingsInfo } from "./BuildingsInfo";

export const FeaturedList = (): JSX.Element => {
  return (
    <section id="about-us" className="bg-white-100">
      <div className="flex flex-col items-center justify-center gap-12 px-10 py-10 lg:gap-16.5 lg:py-18">
        <div className="grid grid-cols-1 gap-2 text-center">
          <Heading type="blocks">Property Featured</Heading>
          <p className="leading-24">
            Real estate is a crowded field. But with the number of buyers purchasing homes through <br /> real estate
            agents and brokers growing there's plenty of
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7.5">
          {buildingInfo.map((i) => (
            <BuildingsInfo key={i.id} titled={i.title} description={i.description} image={i.imagePath}>
              <p>children</p>
            </BuildingsInfo>
          ))}
        </div>
        <img src="/images/building.png" alt="" />
      </div>
    </section>
  );
};
