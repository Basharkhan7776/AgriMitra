import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"



const posts = [
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    price: "200",
    lists: ["Provides financial support to farmers against crop losses due to natural calamities"],
  },
  {
    title: "Weather-Based Crop Insurance Scheme",
    price: "300",
    lists: ["Covers crop losses due to adverse weather conditions"],
  },
  {
    title: "Livestock Insurance Scheme",
    price: "1000",
    lists: ["Provides protection against death of livestock", "Offers subsidy on premium up to 50%."],
  },
  {
    title: "Coconut Palm Insurance Scheme",
    price: "500",
    lists: ["Covers coconut palms against natural calamities", "Provides financial support for replanting"],
  },
  {
    title: "National Agricultural Insurance Scheme",
    price: "100",
    lists: ["Mandatory for loanee farmers", "Offers comprehensive risk insurance"],
  },
  {
    title: "Modified National Agricultural Insurance Scheme",
    price: "600",
    lists: ["Replaced by PMFBY but still applicable in some areas.", "Covers yield losses due to natural calamities"],
  },
  {
    title: "Restructured Weather-Based Crop Insurance Scheme",
    price: "1200",
    lists: ["Uses advanced weather monitoring systems", "Covers crop losses due to adverse weather conditions"],
  },
  {
    title: "Tractor Insurance",
    price: "100",
    lists: ["Covers tractors against accidents and theft", "Offers coverage for third-party liability", "Offers protection against natural calamities"],
  },
]


export default function Insurance() {
  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"insurance"} />
      <div className="flex gap-6">
        <Input placeholder="Search insurance plans..."></Input>
        <Popover>
          <PopoverTrigger>
            <Button variant={"secondary"}>All Types<ChevronDown /></Button>
          </PopoverTrigger>
          <PopoverContent>Types</PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button variant={"secondary"}>Premimum<ChevronDown /></Button>
          </PopoverTrigger>
          <PopoverContent>Premimum</PopoverContent>
        </Popover>

      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {posts.map((post, index) => (
          <InsuranceCard
            key={index}
            title={post.title}
            price={post.price}
            lists={post.lists}
          />
        ))}
      </div>
    </div>
  )
}

function InsuranceCard({ title, price, lists }: { title: string, price: string, lists: string[] }) {
  return <Card className="w-[300px] min-h-[300px] flex flex-col justify-between gap-4 p-4">
    <CardTitle>{title}</CardTitle>
    <div>
      {lists.map((list) => (
        <div className="flex gap-2 text-wrap" key={list}>
          <Check className="text-primary" />
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