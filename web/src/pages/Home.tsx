import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import HeroImage from "@/assets/HeroImage.png";
import { Card } from "@/components/ui/card";
import { Bug, ChartLine, Cloud, File, Leaf, Wallet } from "lucide-react";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div id="HomeNavPanel" className="w-full bg-white rounded-sm shadow-sm p-3 px-6 flex gap-4 justify-between items-center">
        <Logo />
        <div className="flex gap-8 items-center">
          <a className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Home</a>
          <a className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Feature</a>
          <a className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Marketplace</a>
          <a className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">About</a>
          <a className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Contact</a>
          <Button >Get Started</Button>
        </div>
      </div>
      <div id="home" className="w-full flex gap-4 justify-around">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-6xl text-center font-bold  text-black">Transforming Agriculture</h1>
          <h1 className="text-6xl text-center font-semibold text-primary">with AI Technology</h1>
          <p className="text-center text-secondary-foreground">Experience next-generation farming with hyperlocal weather forecasts, AI-powered <br />
            pest management, and a verified marketplace - all in one platform. </p>
          <div className="flex justify-center">
            <Button className="text-2xl p-8 font-semibold">Explore AgriMitra</Button>
          </div>
        </div>
        <div className="p-12 flex justify-center items-center">
          <img src={HeroImage} alt="Home Image" className="rounded-[15%] h-[700px]" />
        </div>
      </div>
      <div id="about" className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 p-12">
          <h1 className="text-3xl font-semibold">Powerfull Feature for Modern farming</h1>
          <p>Everything you need to optimize your </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <AboutCard 
          icon={<Cloud stroke="#07B506" />} 
          title="Hyperlocal Weather Alerts" 
          description="Get precise weather forecasts and alerts specific to your farm location" 
          />
          <AboutCard 
          icon={<Bug stroke="#07B506" />} 
          title="AI Pest Management" 
          description="Early detection and treatment recommendations using AI image analysis" 
          />
          <AboutCard 
          icon={<File stroke="#07B506" />} 
          title="Government Scheme Finder" 
          description="Discover and apply for relevant agricultural schemes and subsidies" 
          />
          <AboutCard 
          icon={<ChartLine stroke="#07B506" />} 
          title="Yield Optimization" 
          description="Data-driven insights to maximize your crop yield and profitability" 
          />
          <AboutCard 
          icon={<Wallet stroke="#07B506" />} 
          title="Crop Pricing Insights" 
          description="Real-time market prices and demand forecasts for better decisions" 
          />
          <AboutCard 
          icon={<Leaf stroke="#07B506" />} 
          title="Sustainable Planner" 
          description="Plan your crop rotation and resource usage sustainably" 
          />
        </div>
      </div>
    </div>
  )
}

export default Home

function AboutCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return <Card className="flex flex-col gap-4 p-8">
    <div className="h-12 w-12 bg-secondary rounded-lg flex justify-center items-center">
      {icon}
    </div>
    <h1 className="font-bold text-lg">{title}</h1>
    <p>{description}</p>
  </Card>
}