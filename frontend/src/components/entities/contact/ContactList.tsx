import { Heading } from "@src/components/ui/heading/Heading";
import { BuildingComments } from "./BuildingComments";
import { SentGmail } from "./SentGmail";

export const ConactList = (): JSX.Element => {
  return (
    <section id="blog">
      <div className="flex flex-col items-center justify-center gap-11 py-10 lg:gap-7.5 lg:py-18">
        <div className="grid grid-cols-1 gap-2 text-center">
          <Heading type="description">Reviews</Heading>
          <Heading type="blocks">Our valuable customer says</Heading>
        </div>
        <BuildingComments />
        <SentGmail />
      </div>
    </section>
  );
};
