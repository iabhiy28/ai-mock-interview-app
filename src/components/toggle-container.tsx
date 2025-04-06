
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils";
import NavigationRoutes from "./navigation-routes"
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

  

const ToggelContainer = () => {
    const { userId } = useAuth();
  return <Sheet>
  <SheetTrigger className="md:hidden">
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle />
      
    </SheetHeader>
    <nav className="gap-3 flex flex-col items-start">
    <NavigationRoutes  isMobile/>
            {userId && (
                <NavLink
                  to="/generate"
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                >
                  Take an Interview
                </NavLink>
              )}
    </nav>
  </SheetContent>
</Sheet>

}

export default ToggelContainer