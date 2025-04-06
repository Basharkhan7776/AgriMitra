import { useState } from "react"
import { FooterMain } from "@/components/footer"
import { NavBarDash } from "@/components/navBar"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloudFog, PlusIcon, SendHorizonal, Sun, Wind } from "lucide-react"
import { DashSidebar } from "@/components/app-sidebar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"




export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({
    CropDistribution: false,
    YieldTrend: false,
    AiRecommendation: false,
    FieldHealthMap: false,
    MarketPrice: false,
    CommunityUpdates: false,
    SoilHealth: false,
    IrrigationSchedule: false,
    PestControlSuggestions: false,
  });



  return (
    <div className="w-full min-h-screen">
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
        <Card id="AiChatBot" className="p-2 px-4 min-h-[390px]">
          <CardTitle className="text-lg font-semibold">AI Chat Bot</CardTitle>
          <div className="h-[90%] flex flex-col gap-2 justify-between">
            <div className="">

            </div>
            <div className="flex gap-1 items-center justify-center">
              <Input placeholder="Ask me anything" className=""/>
              <Button className="" variant={"secondary"}><SendHorizonal/> Ask</Button>
            </div>
          </div>
        </Card>

        <Card id="Weather" className="p-2 px-4 min-h-[390px]">
          <CardTitle className="text-lg font-semibold">Weather</CardTitle>
          <div className="w-full h-[90%] flex flex-col gap-4 justify-around items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div><Sun stroke="orange" className="h-36 w-36"/></div>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-center">39°c</h1>
                <h1 className="text-4xl text-center">Naini, Allahabad</h1>
              </div>
            </div>
            <div className="flex w-full justify-around items-center">
              <div className="flex items-center gap-2">
                <div><CloudFog className="h-8 w-8"/></div>
                <div>
                  <h1>7%</h1>
                  <h1>Humidity</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div><Wind className="h-8 w-8"/></div>
                <div>
                  <h1>4.04 km/hr</h1>
                  <h1>Wind speed</h1>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Statable wigets or cards */}

        <Card id="CropDistribution" className={`${!(open.CropDistribution) && "hidden"} p-2 min-h-[390px] px-4`}>
          <CardTitle className="text-lg font-semibold">Crop Distribution</CardTitle>
        </Card>
        <Card id="YieldTrend" className={`${!(open.YieldTrend) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Yield Trend</CardTitle>
        </Card>
        <Card id="AiRecommendation" className={`${!(open.AiRecommendation) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">AI Recommendation</CardTitle>
        </Card>
        <Card id="FieldHealthMap" className={`${!(open.FieldHealthMap) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Field Health Map</CardTitle>
        </Card>
        <Card id="MarketPrice" className={`${!(open.Marketplace) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Market Price</CardTitle>
        </Card>
        <Card id="CommunityUpdates" className={`${!(open.CommunityUpdates) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Community Updates</CardTitle>
        </Card>
        <Card id="SoilHealth" className={`${!(open.SoilHealth) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Soil Health</CardTitle>
        </Card>
        <Card id="IrrigationSchedule" className={`${!(open.IrrigationSchedule) && "hidden"} p-2 px-4 min-h-[390px]`}>
          <CardTitle className="text-lg font-semibold">Irrigation Schedule</CardTitle>
        </Card>
        <Card id="PestControlSuggestions" className={`${!(open.PestControlSuggestions) && "hidden"} p-2 px-4 min-h-[390px]`}>
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
              <div className="flex flex-wrap gap-5 items-center">
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.CropDistribution}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, CropDistribution: checked === true }))}
                    className="h-6 w-6"
                  />
                  <Label className="text-lg">Crop Distribution</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.YieldTrend}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, YieldTrend: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Yield Trend</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.AiRecommendation}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, AiRecommendation: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">AI Recommendation</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.FieldHealthMap}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, FieldHealthMap: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Field Health Map</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.CommunityUpdates}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, CommunityUpdates: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Community Updates</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.SoilHealth}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, SoilHealth: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Soil Health</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.IrrigationSchedule}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, IrrigationSchedule: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Irrigation Schedule</Label>
                </div>
                <div className="flex gap-5 items-center">
                  <Checkbox
                    checked={open.PestControlSuggestions}
                    onCheckedChange={(checked) => setOpen(prev => ({ ...prev, PestControlSuggestions: checked === true }))}
                    className="h-6 w-6" />
                  <Label className="text-lg">Pest Control</Label>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}

