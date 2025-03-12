import { NavBarDash } from "@/components/navBar";
import { FooterMain } from "@/components/footer";
import { Outlet } from "react-router-dom";


export default function Community() {
  return (
    <div className="w-full">
      <NavBarDash currentPage={"community"} />
      <Outlet/>
      <FooterMain />
    </div>
  )
}
