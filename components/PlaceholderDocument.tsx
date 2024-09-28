"use client";

import { FrownIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";


function PlaceholderDocument() {
  
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      

      <p className="font-semibold">
        {"Add a document"}
      </p>
    </Button>
  );
}
export default PlaceholderDocument;