import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import SignupImage from "@/assets/SignupImage.png"
import { Bot, ChartLine, Users } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"


function Register() {
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
          <Button >Sign in</Button>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img
            src={SignupImage}
            alt="Image"
            className="rounded-[10%] h-96"
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <div><Bot stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Smart Farming Solutions</h1>
                <p className="text-secondary-foreground">Access cutting-edge agricultural technology and AI-powered insights</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div><Users stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Community Support</h1>
                <p className="text-secondary-foreground">Connect with expert farmers and agricultural specialists</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div><ChartLine stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Yield Optimization</h1>
                <p className="text-secondary-foreground">Maximize your farm's productivity with data-driven decisions</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-10 flex flex-col gap-2 w-[500px]">
          <CardTitle className="text-2xl text-center">Create your account</CardTitle>
          <CardDescription className="text-center">Join thousands of farmers already using AgriMitra</CardDescription>
          <CardContent className="flex flex-col gap-3">
            <div>
              <Label>Full Name</Label>
              <Input type="text" placeholder="Enter your full name" />
            </div>
            <div>
              <Label>Email address</Label>
              <Input type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="Create a password" />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type="password" placeholder="Confirm your password" />
            </div>
            <div className="flex gap-1 items-center">
              <Checkbox/><p>I agree to the</p><a href="#Term-and-condotion" className="text-primary">Terms and Conditions</a>
            </div>
            <Button className="w-full">Create account</Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>Already have an account? <a href="#login" className="text-primary">Sign in here</a></p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Register