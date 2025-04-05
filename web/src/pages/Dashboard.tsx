import { useState } from "react"
import { FooterMain } from "@/components/footer"
import { NavBarDash } from "@/components/navBar"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { DashSidebar } from "@/components/app-sidebar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"




export default function Dashboard() {
  const [toggle, setToggle] = useState(false);



  return (
    <div className="w-full h-screen">
      <DashSidebar
        toggle={toggle}
        setToggle={setToggle}
      />
      <NavBarDash
        currentPage={"dashboard"}
        toggle={toggle}
        setToggle={setToggle}
      />
      <div className="min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2 gap-5 pt-24 py-5 px-[6%] md:px-[15%] lg:px-[10%]">
        <Card id="CropDistribution" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Crop Distribution</CardTitle>
        </Card>
        <Card id="YieldTrend" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Yield Trend</CardTitle>
        </Card>
        <Card id="AiRecommendation" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">AI Recommendation</CardTitle>
        </Card>
        <Card id="FieldHealthMap" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Field Health Map</CardTitle>
        </Card>
        <Card id="MarketPrice" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Market Price</CardTitle>
        </Card>
        <Card id="CommunityUpdates" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Community Updates</CardTitle>
        </Card>
        <Card id="AiChatBot" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">AI Chat Bot</CardTitle>
        </Card>
        <Card id="SoilHealth" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Soil Health</CardTitle>
        </Card>
        <Card id="IrrigationSchedule" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Irrigation Schedule</CardTitle>
        </Card>
        <Card id="PestControlSuggestions" className="p-2 px-4">
          <CardTitle className="text-lg font-semibold">Pest Control Suggestions</CardTitle>
        </Card>
        <div className="col-span-2 flex justify-center items-center">
          <Dialog>
            <DialogTrigger>
              <Button size={"lg"}><PlusIcon /> Add More</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Here You can add more Cards/Widgets</DialogTitle>

              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}
