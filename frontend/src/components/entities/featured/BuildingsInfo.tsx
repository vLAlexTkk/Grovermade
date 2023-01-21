import { IBildings } from "@src/types/buildingCard";

export const BuildingsInfo = ({ children, titled, image, description,  ...props }: IBildings): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-3 hover:bg-orange transition-all hover:scale-110 hover:text-white bg-white py-6 px-6 rounded-lg shadow-lg" {...props}>
      <div className="flex flex-row justify-center items-center px-4 py-4 rounded-lg bg-white-100">
        <img src={image} alt="logo-card" className="text-orange" />
      </div>
      <h2 className="text-20 leading-30 font-semibold">{titled}</h2>
      <p className="leading-24 max-w-[340px]">{description}</p>
    </div>
  );
};
