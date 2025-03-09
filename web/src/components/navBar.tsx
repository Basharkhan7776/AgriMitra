
import { Logo } from "@/components/ui/logo"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, HomeIcon, Store, Users } from "lucide-react";


function NavBarHome({ mainButtonSite, mainButtonText, homePage }: { mainButtonSite: string, mainButtonText: string, homePage: boolean }) {
    const navigate = useNavigate()
    return (
        <div id="HomeNavPanel" className="w-full fixed top-0 bg-white rounded-sm shadow-sm p-3 px-6 flex gap-4 justify-between items-center snap-center snap-mandatory">
            <Logo />
            <div className="flex gap-8 items-center">
                <a href={homePage ? "#home" : undefined} onClick={!homePage ? () => navigate("/") : undefined} className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Home</a>
                <a href="#feature" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Feature</a>
                <a href="#marketplace" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Marketplace</a>
                <a href="#about" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">About</a>
                <a href="#contact" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Contact</a>
                <Button onClick={() => { navigate(mainButtonSite) }} >{mainButtonText}</Button>
            </div>
        </div>
    )
}

function NavBarDash({ currentPage }: { currentPage: "dashboard" | "marketplace" | "community" }) {
    const navigate = useNavigate()
    return (
        <div id="DashboardNavPanel" className="w-full fixed top-0 bg-white rounded-sm shadow-sm py-4 px-6  flex gap-4 justify-between items-center ">
            <Logo />
            <div className="flex gap-4 items-center">
                <div className="flex gap-4">
                    <Button
                        variant={"ghost"}
                        className={`${(currentPage == "dashboard") ? "text-primary hover:text-primary" : ""}`}
                        onClick={() => navigate("/dashboard")}
                    >
                        <HomeIcon /> Dashboard
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`${(currentPage == "marketplace") ? "text-primary hover:text-primary" : ""}`}
                        onClick={() => navigate("/marketplace")}
                    >
                        <Store /> Marketplace
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`${(currentPage == "community") ? "text-primary hover:text-primary" : ""}`}
                        onClick={() => navigate("/community")}
                    >
                        <Users /> Community
                    </Button>
                    <Button
                        variant={"ghost"}
                    >
                        <Bell fill="#07B506" stroke="#07B506" />
                    </Button>
                </div>
                <div>
                    <Button variant={"secondary"}>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        John Farmer
                    </Button>
                </div>
            </div>
        </div>
    )
}


export { NavBarHome, NavBarDash }