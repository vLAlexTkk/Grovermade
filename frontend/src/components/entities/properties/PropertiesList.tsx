import { Heading } from "@components/ui/heading/Heading";
import { TabsPage } from "../hero/TabsPage";
import { InfoCards } from "./InfoCards";

export const PropertiesList = ({}): JSX.Element => {
  return (
    <section id="properties">
      <div className="flex flex-col items-center justify-center gap-12 py-10 lg:gap-17.5 lg:py-18">
        <Heading type="blocks">Popular Properties</Heading>
        <InfoCards />
      </div>
    </section>
  );
};
