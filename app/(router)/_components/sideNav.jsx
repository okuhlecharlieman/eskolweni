import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import React from "react";
import Image from "next/image";

function sideNav() {
  const menu = [
    { id: 1, name: "All courses", icon: BookOpen },
    { id: 2, name: "Membership", icon: BadgeIcon },
    { id: 3, name: "Be Instructor", icon: GraduationCap },
  ];
  return (
    <div className="p-5  bg-white shadow-sm border h-screen ">
      <div className="flex justify-center mb-5">
        {" "}
        {/* Centering the image */}
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <hr className="mt-7"></hr>
      <div className="mt-8">
        {menu.map((item) => (
          <div
            key={item.id}
            className=" group flex gap-3 mt-1 p-3 text-[20px] items-center cursor-pointer hover:bg-primary hover:text-white rounded-3xl transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default sideNav;
