import { ITab } from "@src/types/tab";
import React, { memo } from "react";

interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}

const TabsComponent: React.FC<ITabsProps> = ({ selectedId, tabs, onClick }) => {
  return (
    <div className="flex max-w-[200px] flex-row justify-center gap-5 rounded-tl-md rounded-tr-md bg-white py-3 px-3">
      {tabs &&
        tabs.map((tab) => (
          <div
            className={
              tab.id === selectedId
                ? "cursor-pointer border-b border-primary pb-[1px] font-semibold leading-27"
                : "cursor-pointer font-semibold leading-27"
            }
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={
                tab.id === selectedId ? "scale-110 text-orange transition-all" : "text-black transition-colors"
              }
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent);
