// src/components/layout/FilterButtons.tsx
import React from "react";
import { sortByType } from "../../data/projects"

type FilterButtonsProps = {
  currentFilter: sortByType;
  onFilterChange: (filter: sortByType) => void;
};


export default function ProjectFilterButtons({ currentFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex gap-4 justify-center font-poppins text-xl">
      {["All", "Interior", "Exterior"].map((filter) => (
        <div
          key={filter}
          className={`cursor-pointer hover:text-red transition-all duration-300 ${
            currentFilter === filter ? "text-red" : ""
          }`}
          onClick={() => onFilterChange(filter as sortByType)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
