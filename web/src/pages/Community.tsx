import { useState } from "react";
import { NavBarDash } from "@/components/navBar";
import { FooterMain } from "@/components/footer";
import { Outlet } from "react-router-dom";
import { DashSidebar } from "@/components/app-sidebar";


export default function Community() {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="w-full">
      <DashSidebar
        toggle={toggle}
        setToggle={setToggle}
      />
      <NavBarDash
        currentPage={"community"}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Outlet />
      <FooterMain />
    </div>
  )
}
