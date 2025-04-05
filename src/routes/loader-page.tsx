import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

const LoaderPage = ({className} : {className ?: string}) => {
  return (
    <div className={cn("w-screen h-screen flex items-center justify-center z-50", className)}>
        <Loader  className="w-6 h-6 min-w-6 animate-spin"/>
    </div>
  )
}



export default LoaderPage
