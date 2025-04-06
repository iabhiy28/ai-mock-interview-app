import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import  Container  from "@/components/container";
import LogoContainer from "@/components/logo-container";
import NavigationRoutes from "@/components/navigation-routes";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile-container";
import ToggelContainer from "./toggle-container";




const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className = "hidden md:flex items-center gap-6">
            <NavigationRoutes />

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
            {/* profile section */}
            <div className="ml-auto flex items-center gap-6">
              <ProfileContainer />

            </div>
            {/* mobile toggle section */}
            <ToggelContainer />
        </div>
      </Container>
    </header>
  );
};

export default Header;