
import { Logo } from "@/components/ui/logo"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, HomeIcon, Store, Users } from "lucide-react";


function NavBarHome({ mainButtonSite, mainButtonText, homePage }: { mainButtonSite: string, mainButtonText: string, homePage: boolean }) {
    const navigate = useNavigate()
    return (
        <div id="HomeNavPanel" className="w-full z-10 fixed top-0 bg-white rounded-sm shadow-sm p-3 px-6 flex gap-4 justify-between items-center snap-center snap-mandatory">
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
                        onClick={() => navigate("/community/blogs")}
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
                    <Button variant={"secondary"} className="bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground">
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

function NavBarCommunity({ currentPage }: { currentPage: "blogs" | "govSchemes" | "insurance" }) {
    const navigate = useNavigate()

    return <div id="CommunityNavPanel" className="w-full flex flex-col gap-5">
        <div>
            <h1 className="text-2xl font-semibold">Community</h1>
        </div>
        <div className="flex gap-12 h-8  w-full">
            <a className={`text-sm border-b-2 ${(currentPage=="blogs")?"border-primary text-primary":""} cursor-pointer`} onClick={() => navigate("/community/blogs")}>Blogs</a>
            <a className={`text-sm border-b-2 ${(currentPage=="govSchemes")?"border-primary text-primary":""} cursor-pointer`} onClick={() => navigate("/community/government-schemes")}>Government Schemes</a>
            <a className={`text-sm border-b-2 ${(currentPage=="insurance")?"border-primary text-primary":""} cursor-pointer`} onClick={() => navigate("/community/insurance")}>Agri Insurance</a>
        </div>
    </div>
}



export { NavBarHome, NavBarDash, NavBarCommunity }