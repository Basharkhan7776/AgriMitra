import { FooterMain } from "@/components/footer"
import { NavBarDash } from "@/components/navBar"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"



export default function Dashboard() {
  return (
    <div className="w-full h-screen">
        <NavBarDash currentPage={"dashboard"}/>
        <div className="min-h-screen w-full grid grid-cols-2 gap-5 mt-20 py-5 px-48">
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
            <Button size={"lg"}><PlusIcon /> Add More</Button>
          </div>
        </div>
        <FooterMain/>
    </div>
  )
}
