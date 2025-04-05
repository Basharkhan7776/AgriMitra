import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, Ellipsis } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"



const posts = [
  {
    image: "https://services.india.gov.in/assets/images/india-portal-logo.png",
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a Central Sector Scheme with 100% funding by the Government of India. It provides financial support of ₹6,000 per year to small and marginal farmers, disbursed in three equal installments of ₹2,000 directly into their bank accounts. The scheme aims to supplement farmers' income for agricultural and allied activities."
  },
  {
    image: "https://cdn.myscheme.in/images/logos/myscheme-logo-black.svg",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "Launched on February 18, 2016, PMFBY provides crop insurance to farmers at affordable premiums. It covers losses due to natural disasters, pests, and diseases. The scheme uses advanced technologies like satellite imaging and drones for accurate loss estimation and timely claim settlements"
  },
  {
    image: "https://static.pib.gov.in/WriteReadData/specificdocs/photo/2025/jan/ph202513480201.png",
    title: "Kisan Credit Card (KCC) Scheme",
    description: "The KCC scheme provides farmers with credit for agricultural needs, including post-harvest expenses, marketing loans, and consumption requirements. It offers flexible credit limits based on landholding size and crop types, ensuring timely financial support for farming activities"
  },
  {
    image: "https://pib.gov.in/images/indian-emblem.png",
    title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    description: "Launched on July 1, 2015, PMKSY aims to expand irrigation coverage and improve water use efficiency under the motto Har Khet Ko Paani. It promotes micro-irrigation techniques like Per Drop More Crop and focuses on water conservation through rainwater harvesting"
  },
  {
    image: "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/pmksy.jpg",
    title: "Soil Health Card Scheme",
    description: "Launched on July 1, 2015, PMKSY aims to expand irrigation coverage and improve water use efficiency under the motto Har Khet Ko Paani. It promotes micro-irrigation techniques like Per Drop More Crop and focuses on water conservation through rainwater harvesting."
  },
  {
    image: "https://cdn.s3waas.gov.in/s388ae6372cfdc5df69a976e893f4d554b/uploads/2018/09/2018091065-1.jpg",
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description: "VY promotes organic farming through cluster-based approaches and eco-friendly practices. It supports Participatory Guarantee System (PGS) certification for organic products and aims to improve soil health while reducing chemical usage in agriculture."
  },
  {
    image: "https://dmsouthwest.delhi.gov.in/wp-content/themes/district-theme/images/digital-india.png",
    title: "National Agriculture Market (e-NAM)",
    description: "e-NAM is a pan-India electronic trading portal launched on April 14, 2016, to integrate Agricultural Produce Market Committees (APMCs) into a unified national market. It facilitates online trading of agricultural commodities and ensures better price discovery for farmers through transparency in transactions"
  },
  {
    image: "https://pib.gov.in/images/indian-emblem.png",
    title: "Rashtriya Krishi Vikas Yojana (RKVY)",
    description: "RKVY provides financial support to states for implementing agriculture development projects tailored to local needs. It focuses on increasing productivity through infrastructure development, technology adoption, and market linkages"
  },
  {
    image: "https://services.india.gov.in/assets/images/india-portal-logo.png",
    title: "PM Kisan Maandhan Yojana (PM-KMY)",
    description: "PM-KMY is a pension scheme for small and marginal farmers aged 18–40 years. Farmers contribute ₹55–200 monthly until the age of 60, after which they receive a monthly pension of ₹3,000."
  },
  {
    image: "ps://static.pib.gov.in/WriteReadData/specificdocs/photo/2025/jan/ph202513480201.png",
    title: "Gramin Bhandara Yojana",
    description: "This scheme supports the construction of rural warehouses or cold storage facilities to reduce post-harvest losses and ensure better storage solutions for agricultural produce."
  },
];


export default function GovSchemes() {
  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"govSchemes"} />
      <div className="flex gap-4">
        <Input placeholder="Search schemes..."></Input>
        <Popover>
          <PopoverTrigger>
            <Button variant={"secondary"}>All Regions<ChevronDown /></Button>
          </PopoverTrigger>
          <PopoverContent>Regions</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button variant={"secondary"}>All Types<ChevronDown /></Button>
          </PopoverTrigger>
          <PopoverContent>Types</PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {posts.map((post, index) => (
          <GovSchemesCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button size={"lg"}><Ellipsis /> Load More</Button>
      </div>
    </div>
  )
}

function GovSchemesCard({ title, description, image }: { title: string, description: string, image: string }) {
  return <Card className="w-[400px] flex flex-col gap-4">
    <div className="flex justify-center bg-white rounded-lg">
      <img src={image} alt="Image" />
    </div>
    <div className="h-1/2 flex flex-col justify-between p-2">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-sm">{description}</CardDescription>
      <Button>Learn More</Button>
    </div>
  </Card>
}