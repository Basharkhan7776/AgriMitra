import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";



export function HomeSidebar({ toggle, setToggle }: { toggle: boolean, setToggle: (value: boolean) => void }) {
  const navigate=useNavigate();


  return (
    <div className={`${toggle ? "" : "hidden"} w-[300px] flex flex-col gap-8 p-6 h-screen fixed z-20 top-0 right-0 backdrop-blur-lg bg-black/30`}>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          onClick={() => setToggle(false)}
          className="">
          <X />
        </Button>
      </div>
        <Button variant={"secondary"} onClick={()=>{navigate("/")}}>Home</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/register")}}>Register</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/login")}}>Signin</Button>
    </div>
  )
}


export function DashSidebar({ toggle, setToggle }: { toggle: boolean, setToggle: (value: boolean) => void }) {
  const navigate=useNavigate();


  return (
    <div className={`${toggle ? "" : "hidden"} w-[300px] flex flex-col gap-8 p-6 h-screen fixed z-20 top-0 right-0 backdrop-blur-lg bg-black/30`}>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          onClick={() => setToggle(false)}
          className="">
          <X />
        </Button>
      </div>
        <Button variant={"secondary"} onClick={()=>{navigate("/dashboard")}}>Dashboard</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/marketplace")}}>Marketplace</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/community/blogs")}}>Blogs</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/community/government-schemes")}}>Schemes</Button>
        <Button variant={"secondary"} onClick={()=>{navigate("/community/insurance")}}>Insurance</Button>
    </div>
  )
}
