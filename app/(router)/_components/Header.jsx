import { BellDot, Search } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="bg-white p-4 flex justify-between ">
      <div className="flex gap-2 border p-2  rounded-full">
        <Search className="h-5 w-5" />
        <input className="outline-none" type="text" placeholder="Search..." />
      </div>
      <div className="flex items-center gap-4">
        {" "}
        <BellDot className="" />
        <Button>Get stated</Button>
      </div>
    </div>
  );
}

export default Header;
