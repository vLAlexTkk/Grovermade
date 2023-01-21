import { contactInfo } from "@src/data/data";
import Bracket from "@icons/ bracket.svg";
// width="28" height="58"
export const BuildingComments = (): JSX.Element => {
  return (
    <div className="relative z-20 flex w-full snap-x snap-mandatory gap-8 overflow-y-hidden overflow-x-scroll">
      {contactInfo &&
        contactInfo.map((client) => (
          <div
            key={client.id}
            className="flex w-screen max-w-[600px] flex-shrink-0 snap-center flex-col gap-7 rounded-lg bg-white py-8 px-7.5"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-7.5">
                <img
                  src={client.clientLogo ? client.clientLogo : "/images/hero-image.png"}
                  alt="client-logo"
                  className="h-19 w-19 rounded-full"
                />
                <div className="grid grid-cols-1 gap-1">
                  <p className="text-20 font-semibold leading-30">{client.name}</p>
                  <p className="leading-24">{client.profession}</p>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end lg:gap-2">
                <Bracket className="h-9 w-7 text-primary lg:h-14.5 lg:w-7" />
                <Bracket className="h-9 w-7 text-primary lg:h-14.5 lg:w-7" />
              </div>
            </div>
            <p className="max-w-[488px] leading-24">{client.comments}</p>
          </div>
        ))}
    </div>
  );
};
