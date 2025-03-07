import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

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
      <Card className="p-10 flex flex-col gap-2 w-[500px]">
        <CardTitle className="text-2xl text-center">Sign in</CardTitle>
        <CardDescription className="text-center">Welcome Back Farmer</CardDescription>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label>Email Address</Label>
            <Input type="email" placeholder="Enter your Email" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your Password" />
          </div>
          <div className="flex gap-1 items-center">
            <Checkbox /><p>Remember Me</p>
          </div>
          <Button className="w-full">Log in</Button>
          <div className="flex justify-center">
            <h1 className="text-[12px] font-semibold">OR</h1>
          </div>
          <Button className="w-full" variant={"secondary"}><GoogleLogo/>Log in with Google</Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p>Already haven't an account? <a href="#signup" className="text-primary">Sign up here</a></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login


function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
      <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
      <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
      <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
      <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
    </svg>
  )
}
