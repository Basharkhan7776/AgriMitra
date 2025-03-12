import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Ellipsis } from "lucide-react";


export default function GovSchemes() {
  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"govSchemes"}/>
      <div className="flex gap-4">
        <Input placeholder="Search schemes..."></Input>
        <Button variant={"secondary"}>All Regions<ChevronDown/></Button>
        <Button variant={"secondary"}>All Types<ChevronDown/></Button>
      </div>
      <div>

      </div>
      <div className="flex justify-center">
        <Button size={"lg"}><Ellipsis/> Load More</Button>
      </div>
    </div>
  )
}
