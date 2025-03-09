import { Button } from "@/components/ui/button"
import HeroImage from "@/assets/HeroImage.png";
import DemoVideoMock from "@/assets/DemoVideoMock.png";
import { Card } from "@/components/ui/card";
import { NavBarHome } from "@/components/navBar";
import { Bug, ChartLine, Cloud, File, Leaf, Wallet } from "lucide-react";
import { FooterMain } from "@/components/footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()
  return (
    <div className="w-full flex flex-col items-center justify-center scroll-smooth  snap snap-y snap-mandatory">
      <NavBarHome mainButtonSite="/register" mainButtonText="Get Started" homePage={true}/>
      <div id="home" className="w-full  h-screen flex gap-4 justify-around snap-center snap-mandatory">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-6xl text-center font-bold  text-black">Transforming Agriculture</h1>
          <h1 className="text-6xl text-center font-semibold text-primary">with AI Technology</h1>
          <p className="text-center text-secondary-foreground">Experience next-generation farming with hyperlocal weather forecasts, AI-powered <br />
            pest management, and a verified marketplace - all in one platform. </p>
          <div className="flex justify-center">
            <Button onClick={()=>{navigate("/register")}} className="text-2xl p-8 font-semibold">Explore AgriMitra</Button>
          </div>
        </div>
        <div className="p-12 flex justify-center items-center">
          <img src={HeroImage} alt="Home Image" className="rounded-[15%] h-[700px]" />
        </div>
      </div>
      <div id="feature" className="h-screen justify-center flex flex-col gap-12 snap-center snap-mandatory">
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
      <div id="demo" className="w-full snap-center snap-mandatory">
        <Card className="w-full h-screen flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-2xl font-semibold">See AgriMitra in Action</h1>
            <p className="text-center">Watch how our platform transforms traditional farming practices</p>
          </div>
          <img src={DemoVideoMock} alt="demo video" className="rounded-lg h-[70%]"/>
        </Card>
      </div>
      <div id="contact" className="bg-primary w-full flex flex-col py-16 gap-8 justify-center items-center snap-center snap-mandatory">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-center text-3xl text-white font-semibold">Ready to Transform Your Farm?</h1>
          <p className="text-center text-white">Join thousands of farmer already using AgriMitra</p>
        </div>
        <div className="flex gap-2">
          <Button className="text-xl p-7 text-primary" variant={"secondary"} >Get Startet</Button>
          <Button className="text-xl p-7 text-white" variant={"outline"}  >Contact Sales</Button>
        </div>
      </div>
      <FooterMain/>
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