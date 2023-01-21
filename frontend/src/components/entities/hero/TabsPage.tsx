import { Button } from "@src/components/ui/button/Button";
import { ITab } from "@src/types/tab";
import React, { useState } from "react";
import { Tabs } from "./Tabs";

export const TabsPage: React.FC = () => {
  const tabs: ITab[] = [
    { id: "1", label: "Buy" },
    { id: "2", label: "Rent" },
    { id: "3", label: "Sell" },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <section>
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <div className="!z-50 rounded-bl-md rounded-tr-md rounded-br-md bg-white shadow-lg py-3 px-8">
        {selectedTabId === tabs[0].id && (
          <form className="flex flex-col justify-between gap-3 lg:flex-wrap">
            <div className="flex flex-col gap-1">
              <label className="leading-24">Location</label>
              <select name="location" className="rounded border-primary font-medium">
                <option>Dhaka</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Property type</label>
              <select name="property-type" className="rounded border-primary font-medium">
                <option>Duplex</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Price</label>
              <select name="price" className="rounded border-primary font-medium">
                <option>$4000-$8000</option>
              </select>
            </div>
            <Button search="loop" type="search">
              Search
            </Button>
          </form>
        )}
        {selectedTabId === tabs[1].id && (
          <form className="flex flex-col justify-between gap-3 lg:flex-wrap">
            <div className="flex flex-col gap-1">
              <label className="leading-24">Location</label>
              <select name="location" className="rounded border-primary font-medium">
                <option>Dhaka</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Property type</label>
              <select name="property-type" className="rounded border-primary font-medium">
                <option>Duplex</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Price</label>
              <select name="price" className="rounded border-primary font-medium">
                <option>$1000-$3000</option>
              </select>
            </div>
            <Button search="loop" type="search">
              Search
            </Button>
          </form>
        )}
        {selectedTabId === tabs[2].id && (
          <form className="flex flex-col justify-between gap-3 lg:flex-wrap">
            <div className="flex flex-col gap-1">
              <label className="leading-24">Location</label>
              <select name="location" className="rounded border-primary font-medium">
                <option>Dhaka</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Property type</label>
              <select name="property-type" className="rounded border-primary font-medium">
                <option>Duplex</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="leading-24">Price</label>
              <select name="price" className="rounded border-primary font-medium">
                <option>$10000-$15000</option>
              </select>
            </div>
            <Button search="loop" type="search">
              Search
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};
