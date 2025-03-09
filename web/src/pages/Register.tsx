import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import SignupImage from "@/assets/SignupImage.png"
import { Bot, ChartLine, Users } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {NavBarHome} from "@/components/navBar"


function Register() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <NavBarHome mainButtonSite="/login" mainButtonText="Sign in" homePage={false}/>
      <div className="flex gap-4 justify-center items-center">
        <Card className="flex flex-col gap-5 p-4 justify-center items-center">
          <img
            src={SignupImage}
            alt="Image"
            className="rounded-xl h-96"
          />
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <div><Bot stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Smart Farming Solutions</h1>
                <p className="text-secondary-foreground text-sm">Access cutting-edge agricultural technology and AI-powered insights</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div><Users stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Community Support</h1>
                <p className="text-secondary-foreground text-sm">Connect with expert farmers and agricultural specialists</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div><ChartLine stroke="#07B506" /></div>
              <div>
                <h1 className="font-semibold">Yield Optimization</h1>
                <p className="text-secondary-foreground text-sm">Maximize your farm's productivity with data-driven decisions</p>
              </div>
            </div>
          </div>
        </Card>
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