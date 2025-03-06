import { Logo } from "@/components/ui/logo";
import { Label } from "@/components/ui/label";

const ancerlinkStyle = "hover:text-primary transition-all duration-300"

export function FooterMain() {
  return (
    <div id="footer" className="w-full bg-gray-600 text-white py-8 px-4">
      <div className="flex justify-around p-8 border-b border-white/50">
        <div className="flex flex-col gap-4">
          <Logo />
          <p>Empowering farmers with smart technology for <br />
            better yields and sustainable farming.</p>
        </div>
        <div className="flex gap-80">
          <div className="flex flex-col gap-4 justify-start">
            <Label className="text-xl">Product</Label>
            <a className={ancerlinkStyle} href="#features">Features</a>
            <a className={ancerlinkStyle} href="#marketplace">Marketplace</a>
            <a className={ancerlinkStyle} href="#pricing">Pricing</a>
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <Label className="text-xl">Company</Label>
            <a className={ancerlinkStyle} href="#about">About</a>
            <a className={ancerlinkStyle} href="#blog">Blog</a>
            <a className={ancerlinkStyle} href="#careers">Careers</a>
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <Label className="text-xl">Support</Label>
            <a className={ancerlinkStyle} href="#contact">Contact</a>
            <a className={ancerlinkStyle} href="#help-center">Help Center</a>
            <a className={ancerlinkStyle} href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-12">
        <p>© 2024 AgriMitra. All rights reserved.</p>
      </div>
    </div>
  )
}
