import { NavBarHome } from "@/components/navBar";
import { Card, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Setup() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <NavBarHome mainButtonSite="/signin" mainButtonText="Sign in" homePage={false} />
            <Card className="p-10 flex flex-col gap-6 ">
                <CardTitle className="text-4xl text-center">Setup</CardTitle>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Label>Enter your phone number</Label>
                        <Input type="number" placeholder="Enter your phone number" />
                    </div>
                    <div className="col-span-2">
                        <Label>Enter your Address</Label>
                        <Input type="text" placeholder="Enter your Address" />
                    </div>
                    <div>
                        <Label>Enter Farm size</Label>
                        <Input type="number" placeholder="Enter Farm size" />
                    </div>
                    <div>
                        <Label>Enter Farm type</Label>
                        <Input type="text" placeholder="Enter Farm type" />
                    </div>
                    <div>
                        <Label>Enter Crop type</Label>
                        <Input type="text" placeholder="Enter Crop type" />
                    </div>
                    <div>
                        <Label>Enter Soil type (if know)</Label>
                        <Input type="text" placeholder="Enter Soil type" />
                    </div>
                    <div>
                        <Label>Enter Water source (if know)</Label>
                        <Input type="text" placeholder="Enter Water source" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Button className="w-full">Submit</Button>
                    <div className="text-center">OR</div>
                    <Button variant={"secondary"} className="w-full">Skip</Button>
                </div>
            </Card>
        </div>
    )
}
