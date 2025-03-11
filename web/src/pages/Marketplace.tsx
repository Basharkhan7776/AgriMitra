import { NavBarDash } from "@/components/navBar";
import { FooterMain } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ellipsis, Filter, Heart, HeartIcon, History, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Marketplace() {
  return (
    <div className="w-full h-screen">
      <NavBarDash currentPage={"marketplace"} />
      <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-between items-center gap-12">
            <Input placeholder="Search product, seed, tools"></Input>
            <div className="flex gap-4 items-center">
              <Button variant={"secondary"}><Heart /> Wishlist</Button>
              <Button variant={"secondary"}><ShoppingCart /> Cart</Button>
              <Button variant={"secondary"}><History /> History</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant={"secondary"}><Filter /> All Categories</Button>
            <Button variant={"secondary"}>Price Range</Button>
            <Button variant={"secondary"}>Location</Button>
            <Button variant={"secondary"}>Sort By</Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
            title="Product Title"
            description="Product Description"
            price={100}
            authorName="Author Name"
            authorAvator="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Button size={"lg"}><Ellipsis/> Show More</Button>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}

function ProductCard({ image, title, description, price, authorName, authorAvator }: { image: string, title: string, description: string, price: number, authorName: string, authorAvator: string }) {
  return <Card className="flex flex-col gap-4 p-4">
    <div>
      <Button size={"icon"} variant={"secondary"} className="rounded-full absolute "><HeartIcon /></Button>
      <img className="w-full rounded-lg" src={image} alt="img" />
    </div>
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-xl font-semibold text-primary">₹{price}</p>
    </div>
    <div>
      <p>{description}</p>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <Avatar className="h-8 w-8">
          <AvatarImage src={authorAvator} />
          <AvatarFallback>{authorName[0] + authorName[1]}</AvatarFallback>
        </Avatar>
        {authorName}
      </div>
      <Button size={"sm"}>Add to Cart</Button>
    </div>
  </Card>;
}
