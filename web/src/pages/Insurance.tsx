import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronDown } from "lucide-react";


export default function Insurance() {
  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"insurance"}/>
      <div className="flex gap-6">
        <Input placeholder="Search insurance plans..."></Input>
        <Button variant={"secondary"}>All Types<ChevronDown/></Button>
        <Button variant={"secondary"}>Premimum<ChevronDown/></Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <InsuranceCard
          title="Title"
          price="1000"
          lists={["feature 1", "feature 2", "feature 3"]}
        />
      </div>
    </div>
  )
}

function InsuranceCard({title, price, lists}:{title:string, price:string, lists: string[]}) {
  return <Card className="flex flex-col gap-4 p-4">
    <CardTitle>{title}</CardTitle>
    <div>
      {lists.map((list) => (
        <div className="flex gap-2 text-wrap" key={list}>
          <Check className="text-primary"/>
          <p>{list}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <div>
        <Label className="text-gray-700">Starting from</Label>
        <h1 className="font-semibold">₹{price}/month</h1>
      </div>
      <Button>Learn More</Button>
    </div>
  </Card>
}