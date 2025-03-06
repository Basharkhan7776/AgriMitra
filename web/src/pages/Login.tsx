import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div id="HomeNavPanel" className="w-full fixed top-0 bg-white rounded-sm shadow-sm p-3 px-6 flex gap-4 justify-between items-center snap-center snap-mandatory">
        <Logo />
        <div className="flex gap-8 items-center">
          <a href="#home" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Home</a>
          <a href="#feature" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Feature</a>
          <a href="#marketplace" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Marketplace</a>
          <a href="#about" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">About</a>
          <a href="#contact" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Contact</a>
          <Button >Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default Login