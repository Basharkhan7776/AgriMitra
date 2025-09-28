import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarHome } from "@/components/navBar";
import { Card, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Setup() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    farmSize: "",
    farmType: "",
    cropType: "",
    soilType: "",
    waterSource: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a mock setup and does not actually save your data.");
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <NavBarHome
        mainButtonSite="/signin"
        mainButtonText="Sign in"
        homePage={false}
        toggle={toggle}
        setToggle={setToggle}

      />
      <Card className="p-10 flex flex-col gap-6 ">
        <CardTitle className="text-4xl text-center">Setup</CardTitle>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label>Enter your phone number</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <Label>Enter your Address</Label>
            <Input
              type="text"
              name="address"
              placeholder="Enter your Address"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Enter Farm size</Label>
            <Input
              type="number"
              name="farmSize"
              placeholder="Enter Farm size"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Enter Farm type</Label>
            <Input
              type="text"
              name="farmType"
              placeholder="Enter Farm type"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Enter Crop type</Label>
            <Input
              type="text"
              name="cropType"
              placeholder="Enter Crop type"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Enter Soil type (if known)</Label>
            <Input
              type="text"
              name="soilType"
              placeholder="Enter Soil type"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Enter Water source (if known)</Label>
            <Input
              type="text"
              name="waterSource"
              placeholder="Enter Water source"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <div className="text-center">OR</div>
            <Button
              variant={"secondary"}
              className="w-full"
              onClick={() => navigate("/dashboard")}
            >
              Skip
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
