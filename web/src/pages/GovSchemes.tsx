import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
      <div className="grid grid-cols-5 gap-4">
        <GovSchemesCard
          image="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
          title="Title"
          description="Description"
        />
      </div>
      <div className="flex justify-center">
        <Button size={"lg"}><Ellipsis/> Load More</Button>
      </div>
    </div>
  )
}

function GovSchemesCard({title, description, image}:{title:string,description:string,image:string}) {
  return <Card className="flex flex-col gap-4">
    <div className="h-1/2 flex justify-center bg-white rounded-lg"> 
      <img src={image} alt="Image" />
    </div>
    <div className="h-1/2 flex flex-col justify-between p-2">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-lg">{description}</CardDescription>
      <Button>Learn More</Button>
    </div>
  </Card>
}