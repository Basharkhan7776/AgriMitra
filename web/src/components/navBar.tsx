import { Logo } from "@/components/ui/logo"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, HomeIcon, Menu, Store, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"


function NavBarHome({ mainButtonSite, mainButtonText, homePage, toggle, setToggle }: { mainButtonSite: string, mainButtonText: string, homePage: boolean, toggle: boolean, setToggle: (toggle: boolean) => void }) {
    const navigate = useNavigate();


    return (
        <div id="HomeNavPanel" className="w-full z-10 fixed top-0 bg-white rounded-sm shadow-sm p-3 px-6 flex gap-4 justify-between items-center snap-center snap-mandatory">
            <Logo />
            <div className="hidden md:flex gap-8 items-center">
                <a href={homePage ? "#home" : undefined} onClick={!homePage ? () => navigate("/") : undefined} className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Home</a>
                <a href="#feature" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Feature</a>
                <a href="#marketplace" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Marketplace</a>
                <a href="#about" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">About</a>
                <a href="#contact" className="hover:text-primary hover:bg-white transition-all duration-300 cursor-pointer">Contact</a>
                <Button onClick={() => { navigate(mainButtonSite) }} >{mainButtonText}</Button>
            </div>
            <Button
                variant={"secondary"} className="bg-secondary block md:hidden"
                onClick={() => setToggle(!toggle)}
            ><Menu /></Button>
        </div>
    )
}

function NavBarDash({ currentPage, toggle, setToggle }: { currentPage: "dashboard" | "marketplace" | "community", toggle: boolean, setToggle: (toggle: boolean) => void }) {
    const navigate = useNavigate()
    return (
        <div id="DashboardNavPanel" className="z-10 w-full fixed top-0 bg-white rounded-sm shadow-sm py-4 px-6  flex gap-4 justify-between items-center ">
            <Logo />
            <div className="flex gap-4 items-center">
                <div className="hidden lg:flex">
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
                    {/* Notification */}
                    <Popover>
                        <PopoverTrigger>
                            <Button variant={"ghost"}><Bell fill="#07B506" stroke="#07B506" /></Button>
                        </PopoverTrigger>
                        <PopoverContent>Notification</PopoverContent>
                    </Popover>


                </div>
                <div className="">
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"secondary"} className="p-1 md:px-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className="hidden md:block">User</p>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Profile</DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </div>
                <div>
                    <Button
                        variant={"secondary"} className="bg-secondary block lg:hidden"
                        onClick={() => setToggle(!toggle)}
                    ><Menu /></Button>
                </div>
            </div>
        </div>
    )
}

function NavBarCommunity({ currentPage }: { currentPage: "blogs" | "govSchemes" | "insurance" }) {
    const navigate = useNavigate()

    return <div id="CommunityNavPanel" className="w-full hidden lg:flex flex-col gap-5">
        <div>
            <h1 className="text-2xl font-semibold">Community</h1>
        </div>
        <div className="flex gap-12 h-8  w-full">
            <a className={`text-sm border-b-2 ${(currentPage == "blogs") ? "border-primary text-primary" : ""} cursor-pointer`} onClick={() => navigate("/community/blogs")}>Blogs</a>
            <a className={`text-sm border-b-2 ${(currentPage == "govSchemes") ? "border-primary text-primary" : ""} cursor-pointer`} onClick={() => navigate("/community/government-schemes")}>Government Schemes</a>
            <a className={`text-sm border-b-2 ${(currentPage == "insurance") ? "border-primary text-primary" : ""} cursor-pointer`} onClick={() => navigate("/community/insurance")}>Agri Insurance</a>
        </div>
    </div>
}



export { NavBarHome, NavBarDash, NavBarCommunity }