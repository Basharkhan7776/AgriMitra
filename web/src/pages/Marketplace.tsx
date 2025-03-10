import { NavBarDash } from "@/components/navBar";
import { FooterMain } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Heart, History, ShoppingCart } from "lucide-react";


export default function Marketplace() {
  return (
    <div className="w-full h-screen">
      <NavBarDash currentPage={"marketplace"} />
      <div className="min-h-screen w-full mt-20 p-4 px-12">
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-between items-center gap-12">
            <Input placeholder="Search product, seed, tools"></Input>
            <div className="flex gap-4 items-center">
              <Button variant={"secondary"}><Heart/> Wishlist</Button>
              <Button variant={"secondary"}><ShoppingCart/> Cart</Button>
              <Button variant={"secondary"}><History/> History</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant={"secondary"}><Filter/> All Categories</Button>
            <Button variant={"secondary"}>Price Range</Button>
            <Button variant={"secondary"}>Location</Button>
            <Button variant={"secondary"}>Sort By</Button>
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <FooterMain />
    </div>
  )
}
