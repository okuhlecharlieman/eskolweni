import React from "react";
import SideNav from "./_components/sideNav";
import Header from "./_components/Header";

function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 md:block hidden fixed ">
        <SideNav />
      </div>
      <div className="md:ml-64">
        {" "}
        <Header /> {children}
      </div>
    </div>
  );
}

export default layout;
