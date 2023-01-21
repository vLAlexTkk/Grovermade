import { IHeading } from "@src/types/heading";

export const Heading = ({ children, type }: IHeading): JSX.Element => {
  return (
    <h2
      className={
        type == "main"
          ? "text-40 font-semibold leading-60 lg:text-[61px] lg:leading-70"
          : type == "blocks"
          ? "text-36 font-semibold leading-48 lg:text-44 lg:leading-66"
          : type == "description"
          ? "text text-16 font-semibold uppercase leading-24 tracking-0.05 text-orange"
          : ""
      }
    >
      {children}
    </h2>
  );
  // switch (type) {
  //   case "main":
  //     <h2 className="text-40 font-semibold leading-60 lg:text-[61px] lg:leading-70">{children}</h2>;
  //   case "bloks":
  //     <h2 className="text-36 font-semibold leading-48 lg:text-44 lg:leading-66">{children}</h2>;
  //   case "description":
  //     <h2 className="text-16 font-semibold leading-24 tracking-0.05">{children}</h2>;
  // }
};
