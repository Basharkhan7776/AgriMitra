import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Label } from "@radix-ui/react-label"

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div id="HomeNavPanel" className="w-full bg-white rounded-sm shadow-sm p-3 flex gap-4 justify-between items-center">
        <Logo />
        <div className="flex gap-4 items-center">
          <Button variant={"ghost"} className="hover:text-primary hover:bg-white transition-all duration-300">Home</Button>
          <Button variant={"ghost"} className="hover:text-primary hover:bg-white transition-all duration-300">Feature</Button>
          <Button variant={"ghost"} className="hover:text-primary hover:bg-white transition-all duration-300">Marketplace</Button>
          <Button variant={"ghost"} className="hover:text-primary hover:bg-white transition-all duration-300">About</Button>
          <Button variant={"ghost"} className="hover:text-primary hover:bg-white transition-all duration-300">Contact</Button>
          <Button >Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default Home