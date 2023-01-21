import { Heading } from "@components/ui/heading/Heading";
import { partners } from "@src/data/data";

export const PartnersList = ({}): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:gap-16 lg:py-18">
        <Heading type="blocks">Our Partners</Heading>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:flex-row lg:gap-20">
          {partners &&
            partners.map((p) => (
              <a key={p.id} href="#link">
                <img className="transition-transform hover:scale-110" src={p.corporation} />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};
