import React from "react";
import { cardsList } from "@src/data/data";
import { Button } from "@components/ui/button/Button";

import Close from "@icons/close.svg";
import Location from "@icons/location.svg";
import FlatRooms from "@icons/flat-rooms.svg";
import KitchenRooms from "@icons/kitchen-rooms.svg";
import BathRooms from "@icons/bathrooms.svg";

export const CardModal: React.FC = () => {
  const [openInfo, setOpenInfo] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <Button type="card-details" onClick={() => setOpenInfo(true)}>
        Viev details
      </Button>
      {openInfo && (
        <div className="fixed top-0 left-0 flex overflow-y-scroll overscroll-y-auto h-full w-full items-center justify-center bg-black bg-opacity-20 px-5">
          <div className="mx-auto flex max-h-[500px] lg:max-h-[700px] flex-col overflow-y-scroll overscroll-y-auto rounded-[10px] shadow-lg bg-white p-4 md:px-5 md:py-5">
            <button className="flex cursor-pointer flex-row items-end justify-end" onClick={() => setOpenInfo(false)}>
              <Close className="h-3.5 w-3.5 text-black" />
            </button>
            {cardsList &&
              cardsList.map((card) => (
                <div key={card.id} className="grid py-4 grid-cols-1 lg:grid-cols-2 gap-7.5 rounded-lg bg-white">
                  <img src={card.imagePath} alt="cards-image" className="rounded" />
                  <div className="grid max-w-[362px] grid-cols-1 gap-2 px-7.5 pb-8">
                    <div className="flex w-full flex-row items-center justify-between">
                      <h2 className="text-20 font-bold leading-30">{card.title}</h2>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Location className="h-3.5 w-1.5" />
                      <p className="font-semibold text-18">{card.location}</p>
                    </div>
                    <div className="flex flex-row gap-5">
                      <div className="flex flex-row items-center gap-2">
                        <FlatRooms className="h-4 w-3" />
                        <p>{card.propertyInfo[0]}</p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <KitchenRooms className="h-3 w-3.5" />
                        <p>{card.propertyInfo[1]}</p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <BathRooms className="h-3.5 w-3.5" />
                        <p>{card.propertyInfo[1]}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-4">
                      <p className="text-20 font-semibold leading-30 text-orange">{card.price}</p>
                      <Button type="card-details">Rent</Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
