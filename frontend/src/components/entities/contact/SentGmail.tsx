import { Button } from "@src/components/ui/button/Button";
import { Heading } from "@src/components/ui/heading/Heading";

export const SentGmail = (): JSX.Element => {
  return (
    <div className="mx-auto flex flex-col items-center gap-10 rounded-lg bg-primary-100 px-20 py-10">
      <div className="grid grid-cols-1 gap-4 text-center text-white">
        <Heading type="blocks">Get listed your home as a owner</Heading>
        <p className="leading-24 ">
          Here is a list of the greatest real estate company slogans of all-time. These <br /> catchy slogans are
          followed by the Greatest Real Estate.
        </p>
      </div>
      <form className="flex w-full flex-col gap-2 lg:gap-0 items-center lg:flex-row">
        <input
          type="email"
          placeholder="Enter email address"
          className="!w-full  border-none py-5 placeholder:leading-24 lg:w-[700px] lg:rounded-tl-lg lg:rounded-bl-lg"
        />
        <div className="items-center justify-center py-[11px] px-3 md:py-[3px] lg:rounded-tr-lg lg:rounded-br-lg lg:bg-white ">
          <Button type="subscribe">Subscribe</Button>
        </div>
      </form>
    </div>
  );
};
