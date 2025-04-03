import { Button } from "@/components/ui/button";
import { X } from "lucide-react";



export function AppSidebar({ toggle, setToggle }: { toggle: boolean, setToggle: (value: boolean) => void }) {
  return (
    <div className={`${toggle ? "" : "hidden"} w-[300px] h-screen fixed z-20 top-0 right-0 bg-red-400`}>
      AppSidebar
      <Button variant="secondary" onClick={() => setToggle(false)} className="absolute top-4 right-4"><X/></Button>
    </div>
  )
}
