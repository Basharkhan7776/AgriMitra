import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Ellipsis, Heart, MessageCircle, Plus } from "lucide-react";


export default function Blogs() {
  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"blogs"} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input placeholder="Search Post..."></Input>
          <Button variant={"secondary"}>All Categories<ChevronDown /></Button>
          <Button><Plus />Add Post</Button>
        </div>
        <div className="grid grid-cols-5">
          <BlogsPost
            image="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
            title="Title of the post"
            description="Description of the post"
            date="1/1/1"
            authorName="Author Name"
            authorAvator="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Button size={"lg"}><Ellipsis/> Load More</Button>
        </div>
      </div>
    </div>
  )
}

function BlogsPost({ image, title, description, authorName, date, authorAvator }: { image: string, title: string, description: string, authorName: string, date: string, authorAvator: string }) {
  return <Card className="h-[500px]">
    <div className="h-1/2 w-full flex justify-center bg-white rounded-lg"><img className="bg-cover h-full rounded-lg" src={image} alt="post image" /></div>
    <div className="h-1/2 p-4 flex flex-col gap-2 justify-between">
      <div className="flex gap-2 items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src={authorAvator} />
          <AvatarFallback>{authorName[0] + authorName[1]}</AvatarFallback>
        </Avatar>
        <div>
          <p>{authorName}</p>
          <p>Posted on {date}</p>
        </div>
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>{description}</p>
      <div className="flex gap-4">
        <Button variant={"secondary"}><Heart />1</Button>
        <Button variant={"secondary"}><MessageCircle />1</Button>
      </div>
    </div>
  </Card>
}