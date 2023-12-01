import { IPerk } from "@/models/IPerk";
import React from "react";

interface Props {
  perk: IPerk;
}

const PerkDistplay = ({ perk }: Props) => {
  return (
    <div
      className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
    >
      <div className="md:flex-shrink-0 flex justify-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
          {<perk.Icon className="w-1/3 h-1/3" />}
        </div>
      </div>

      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
      </div>
    </div>
  );
};

export default PerkDistplay;
