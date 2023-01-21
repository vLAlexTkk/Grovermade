import React from "react";
import { cardsList } from "@src/data/data";
import { Button } from "@components/ui/button/Button";

import Location from "@icons/location.svg";
import FlatRooms from "@icons/flat-rooms.svg";
import KitchenRooms from "@icons/kitchen-rooms.svg";
import BathRooms from "@icons/bathrooms.svg";
import { CardModal } from "./CardModal";

export const InfoCards: React.FC = () => {
  const [liked, setLiked] = React.useState<any>(null);
  return (
    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
      {cardsList &&
        cardsList.map((card) => (
          <div key={card.id} className="grid grid-cols-1 gap-7.5 rounded-lg shadow-lg bg-white">
            <img src={card.imagePath} alt="cards-image" />
            <div className="grid max-w-[362px] grid-cols-1 gap-2 px-7.5 pb-8">
              <div className="flex w-full flex-row items-center justify-between">
                <h2 className="text-20 font-bold leading-30">{card.title}</h2>
                <div
                  onClick={() => setLiked(!liked)}
                  className={
                    liked == true
                      ? "h-4 w-4 items-end justify-end rounded-full bg-red transition-colors"
                      : "h-4 w-4 items-end justify-end rounded-full bg-white-100 transition-colors"
                  }
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Location className="h-3.5 w-1.5" />
                <p>{card.location}</p>
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
              <div className="flex flex-row items-center justify-between gap-2">
                <p className="text-20 font-semibold leading-30 text-orange">{card.price}</p>
               <CardModal/>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
